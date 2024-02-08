// Dashboard1.jsx
import React from 'react';
import './Dashboards.css';


const Dashboard1 = ({ menu }) => {
  const iframeLinks = [
    null, // 0-based, so null for 0
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1707380908638&to=1707382708638&theme=light&panelId=1",
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1707381287896&to=1707383087896&theme=light&panelId=8",
    'your_third_link_here',
    'your_fourth_link_here',
    'your_fifth_link_here',
    'your_sixth_link_here',
    "https://iot.ncinga.net/grafana/d-solo/a4ffc2db-de10-450e-994e-3710e03c796a/overall-daily-copy?orgId=1&from=1707381784947&to=1707383584947&theme=light&panelId=7",
  ];

  return (
    <div className='dash1' >
      <div className="iframess">
        {menu && iframeLinks[menu] && (
          <iframe src={iframeLinks[menu]} width="450" height="200" frameBorder="0" className="iframe"></iframe>
        )}
      </div>
    </div>
  );
}

export default Dashboard1;
