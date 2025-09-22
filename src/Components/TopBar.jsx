import './TopBar.css';
import motaLogo from '../assets/mota.webp'; 
import digitalIndiaLogo from '../assets/digitalIndia.png';
import myGovLogo from '../assets/myGov.png';


const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={motaLogo} alt="Ministry of Tribal Affairs Logo" className='logo1'/>
      </div>
      <div className="topbar-right">
        <img src={digitalIndiaLogo} alt="Digital India Logo" className='logo2'/>
        <img src={myGovLogo} alt="MyGov Logo" className='logo3'/>
      </div>
    </div>
  );
};

export default TopBar;