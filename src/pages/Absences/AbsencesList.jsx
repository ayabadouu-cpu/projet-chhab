import React, { useState } from 'react';
import { mockAbsences } from '../../data/mockAbsences';

function AbsencesList() {
  const [filter, setFilter] = useState('all');

  const filtered = mockAbsences.filter((a) => {
    if (filter === 'justified') return a.justifiee;
    if (filter === 'unjustified') return !a.justifiee;
    return true;
  });

  return (
    <div>
      <h1 className="page-title">Gestion des absences</h1>
      <p className="page-subtitle">Suivi des absences des stagiaires</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{filtered.length} absence(s)</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn-primary"
              style={{ background: filter === 'all' ? '#1e3a8a' : '#9ca3af' }}
              onClick={() => setFilter('all')}
            >
              Toutes
            </button>
            <button
              className="btn-primary"
              style={{ background: filter === 'justified' ? '#10b981' : '#9ca3af' }}
              onClick={() => setFilter('justified')}
            >
              Justifiées
            </button>
            <button
              className="btn-primary"
              style={{ background: filter === 'unjustified' ? '#ef4444' : '#9ca3af' }}
              onClick={() => setFilter('unjustified')}
            >
              Non justifiées
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Stagiaire</th>
              <th>Date</th>
              <th>Module</th>
              <th>Durée</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id}>
                <td>{a.stagiaire}</td>
                <td>{a.date}</td>
                <td>{a.module}</td>
                <td>{a.duree}h</td>
                <td>
                  <span
                    className={`badge ${a.justifiee ? 'success' : 'danger'}`}
                  >
                    {a.justifiee ? 'Justifiée' : 'Non justifiée'}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Justifier</button>
                  <button className="action-btn delete">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AbsencesList;
