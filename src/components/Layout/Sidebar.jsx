import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menu = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/stagiaires', label: 'Stagiaires' },
    { path: '/formateurs', label: 'Formateurs' },
    { path: '/filieres', label: 'Filières' },
    { path: '/modules', label: 'Modules' },
    { path: '/emploi-temps', label: 'Emploi du temps' },
    { path: '/absences', label: 'Absences' },
    { path: '/notes', label: 'Notes' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Centre Formation</h2>
        <span>Système de gestion</span>
      </div>
      <ul className="sidebar-nav">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
