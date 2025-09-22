import { Outlet } from 'react-router-dom';
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import LandingNavbar from './LandingNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot,faFileLines,faUpload,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './MainLayout.css';
// import UserAvatar from './UserAvatar';

const MainLayout = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const isRecordsView = location.pathname === '/records';

  return (
    <div>
      <LandingNavbar/>
      <div className='hero-dashboard'>
            <nav className="navbar">
              <div className="main-navbar-left">
                <div className="view-pill">
                  {isRecordsView ? 'Records View' : 'Atlas View'}
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
                      
                <button className="action-button secondary">
                  <span><FontAwesomeIcon icon={faUpload} /></span> Upload Document
                </button>

                <button onClick={handleLogout} className="action-button primary">
                  Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
        
                {/* <UserAvatar/> */}
              </div>
            </nav>
        </div>

      <main className="main-content"> 
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;