package com.ncinga.apigateway.configurations;

import lombok.RequiredArgsConstructor;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoders;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomJwtAuthenticationConverterForWebFluxSecurity customJwtAuthenticationConverterForWebFluxSecurity;

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http){
        http
                .authorizeExchange((authorize) -> authorize
                        .pathMatchers("/test/admin").permitAll()
                        .anyExchange().authenticated()
                )
                .oauth2ResourceServer((oauth2) -> oauth2
                        .jwt(jwtConfigurer -> jwtConfigurer.jwtAuthenticationConverter(customJwtAuthenticationConverterForWebFluxSecurity))
                );
        return http.build();
    }

    @Bean
    public ReactiveJwtDecoder jwtDecoder(){
        return ReactiveJwtDecoders.fromIssuerLocation("http://localhost:8080/realms/NCINGA");
    }
}
