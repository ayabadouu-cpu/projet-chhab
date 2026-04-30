import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StagiairesList from './pages/Stagiaires/StagiairesList';
import StagiaireDetails from './pages/Stagiaires/StagiaireDetails';
import FormateursList from './pages/Formateurs/FormateursList';
import FilieresList from './pages/Filieres/FilieresList';
import ModulesList from './pages/Modules/ModulesList';
import EmploiTemps from './pages/EmploiTemps/EmploiTemps';
import AbsencesList from './pages/Absences/AbsencesList';
import NotesList from './pages/Notes/NotesList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuth') === 'true'
  );

  const handleLogin = () => {
    localStorage.setItem('isAuth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar onLogout={handleLogout} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stagiaires" element={<StagiairesList />} />
            <Route path="/stagiaires/:id" element={<StagiaireDetails />} />
            <Route path="/formateurs" element={<FormateursList />} />
            <Route path="/filieres" element={<FilieresList />} />
            <Route path="/modules" element={<ModulesList />} />
            <Route path="/emploi-temps" element={<EmploiTemps />} />
            <Route path="/absences" element={<AbsencesList />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
