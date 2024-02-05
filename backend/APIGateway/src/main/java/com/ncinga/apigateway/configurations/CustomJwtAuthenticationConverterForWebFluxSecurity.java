package com.ncinga.apigateway.configurations;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimNames;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class CustomJwtAuthenticationConverterForWebFluxSecurity implements Converter<Jwt, Mono<AbstractAuthenticationToken>> {
    private final Converter<Jwt, Collection<GrantedAuthority>> jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    @Value("${jwt.auth.custom-converter.principle-attribute}")
    private String principalClaimName;
    @Value("${jwt.auth.custom-converter.resource-id}")
    private String resourceId;


    @Override
    public Mono<AbstractAuthenticationToken> convert(Jwt jwt) {
        Stream<GrantedAuthority> authorities = Stream.concat(
                Objects.requireNonNull(jwtGrantedAuthoritiesConverter.convert(jwt)).stream(),
                extractResourceRoles(jwt).stream()
        );
        System.out.println(1);
        return Mono.just(new JwtAuthenticationToken(jwt, authorities.collect(Collectors.toList()), getPrincipleClaimName(jwt)));
    }

    private String getPrincipleClaimName(Jwt jwt) {
        String claimName = JwtClaimNames.SUB;
        if(principalClaimName != null){
            claimName = principalClaimName;
        }
        return jwt.getClaim(claimName);
    }

    public Collection<? extends GrantedAuthority> extractResourceRoles(Jwt jwt){
        if(jwt.getClaim("resource_access") == null && jwt.getClaim("realm_access") == null){
            return Set.of();
        }
        Map<String, Object> resourceAccess = jwt.getClaimAsMap("resource_access");
        Map<String, Object> realmAccess = jwt.getClaimAsMap("realm_access");
        if(!resourceAccess.containsKey(resourceId) && !realmAccess.containsKey("roles")){
            return Set.of();
        }
        ObjectMapper mapper = new ObjectMapper();
        Map<String, List<String>> resource = mapper.convertValue(resourceAccess.get(resourceId), new TypeReference<>() {});
        List<String> resourceRoles = resource.get("roles");
        List<String> realmRoles = mapper.convertValue(realmAccess.get("roles"), new TypeReference<>() {});
        List<GrantedAuthority> roles = new ArrayList<>();
        resourceRoles.forEach(role -> {
            roles.add(new SimpleGrantedAuthority("ROLE_" + role));
        });
        realmRoles.forEach(role -> {
            System.out.println(role);
            roles.add(new SimpleGrantedAuthority("ROLE_" + role));
        });
        return roles;
    }
}