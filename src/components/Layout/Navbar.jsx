import React from 'react';

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">Tableau de bord administratif</div>
      <div className="navbar-user">
        <div className="user-avatar">AD</div>
        <span style={{ fontSize: '14px', color: '#374151' }}>Admin</span>
        <button className="logout-btn" onClick={onLogout}>
          Déconnexion
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
