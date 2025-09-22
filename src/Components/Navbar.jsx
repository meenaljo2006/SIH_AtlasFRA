import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import logo from "../../public/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRecordsView = location.pathname === '/records';

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <nav className="main-navbar"> 
      <div className="main-navbar-left">
        <div className="navbar-brand-with-desc">
          <img src={logo} alt="Logo" className='logo'/>
          <div>
            <div className="brand-title-line">
              <NavLink to="/atlasView" className="main-brand-link">FRA Atlas</NavLink>

              <div className="view-pill">
                {isRecordsView ? 'Records View' : 'Atlas View'}
              </div>

            </div>

            <p className="navbar-description">Forest Rights Act - Digital Repository & Decision Support System</p>
          </div>

        </div>
      </div>

      <div className="main-navbar-right">
        {isRecordsView ? (
          <NavLink to="/atlasView" className="action-button secondary">
            <span><FontAwesomeIcon icon={faMapLocationDot} /></span> Atlas View
          </NavLink>
        ) : (
          <NavLink to="/records" className="action-button secondary">
            <span><FontAwesomeIcon icon={faFileLines} /></span> Records View
          </NavLink>
        )}
        
        <button className="action-button primary">
          <span><FontAwesomeIcon icon={faUpload} /></span> Upload Document
        </button>

        <UserAvatar/>
      </div>
    </nav>
  );
};

export default Navbar;