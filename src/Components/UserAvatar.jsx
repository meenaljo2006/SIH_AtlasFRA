import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './UserAvatar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const UserAvatar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    return null; 
  }

  const userName = user.name;
  const initials = userName.split(' ').map(name => name[0]).join('').toUpperCase();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="user-avatar-container">
      <div className="avatar-circle">
        {initials}
      </div>
      
      <div className="avatar-dropdown">
        <div className="dropdown-header"> {userName} </div>
        <div className="dropdown-divider"></div>
        <button onClick={handleLogout} className="dropdown-item">
          Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default UserAvatar;