
import React from 'react';
import './Dashboards.css';


const Dashboard1 = ({ menu }) => {
  const iframeLinks = [
    null, 
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1707380908638&to=1707382708638&theme=light&panelId=1",
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1708319365839&to=1708321165839&theme=light&panelId=4",
    'https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1708319424298&to=1708321224298&theme=light&panelId=5',
    'https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1708319616700&to=1708321416700&theme=light&panelId=6',
    'https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1708319644481&to=1708321444481&theme=light&panelId=7',
    'your_sixth_link_here',
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1707381784947&to=1707383584947&theme=light&panelId=7",
  ];

  return (
    <div className='dash1' >
      <div className="iframess">
        {menu && iframeLinks[menu] && (
          <>   
          {menu==="1" && <p className='dashtxt'>"The power consumption details with the comparison between today and yesterday"</p>}      
           <iframe src={iframeLinks[menu]} width="450" height="200" frameBorder="0" className="iframe"></iframe>
</>
        )}
      </div>
    </div>
  );
}

export default Dashboard1;
