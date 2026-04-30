import React from 'react';
import { mockStagiaires } from '../data/mockStagiaires';
import { mockFormateurs } from '../data/mockFormateurs';
import { mockFilieres } from '../data/mockFilieres';
import { mockAbsences } from '../data/mockAbsences';

function Dashboard() {
  const stats = [
    { title: 'Stagiaires', value: mockStagiaires.length, color: '' },
    { title: 'Formateurs', value: mockFormateurs.length, color: 'green' },
    { title: 'Filières', value: mockFilieres.length, color: 'orange' },
    { title: 'Absences', value: mockAbsences.length, color: 'red' },
  ];

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">Vue d'ensemble du centre de formation</p>

      <div className="cards-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className={`stat-card ${stat.color}`}>
            <h3>{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Dernières absences enregistrées</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Stagiaire</th>
              <th>Date</th>
              <th>Module</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {mockAbsences.slice(0, 5).map((abs) => (
              <tr key={abs.id}>
                <td>{abs.stagiaire}</td>
                <td>{abs.date}</td>
                <td>{abs.module}</td>
                <td>
                  <span
                    className={`badge ${
                      abs.justifiee ? 'success' : 'danger'
                    }`}
                  >
                    {abs.justifiee ? 'Justifiée' : 'Non justifiée'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
