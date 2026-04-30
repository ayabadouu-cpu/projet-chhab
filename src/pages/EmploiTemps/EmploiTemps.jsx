import React from 'react';

const horaires = ['08:30 - 10:30', '10:45 - 12:45', '14:00 - 16:00', '16:15 - 18:15'];
const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

const planning = {
  Lundi: ['Algorithmique', 'Base de données', 'Programmation Web', '—'],
  Mardi: ['Frameworks JS', 'Frameworks JS', 'Algorithmique', 'Anglais'],
  Mercredi: ['Programmation Web', 'Base de données', '—', '—'],
  Jeudi: ['Réseaux', 'Système', 'Algorithmique', 'Sport'],
  Vendredi: ['Marketing digital', 'Comptabilité', 'Frameworks JS', '—'],
};

function EmploiTemps() {
  return (
    <div>
      <h1 className="page-title">Emploi du temps</h1>
      <p className="page-subtitle">Planning hebdomadaire — Groupe DEV-201</p>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Horaire</th>
              {jours.map((jour) => (
                <th key={jour}>{jour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horaires.map((horaire, idx) => (
              <tr key={horaire}>
                <td style={{ fontWeight: 600 }}>{horaire}</td>
                {jours.map((jour) => (
                  <td key={jour}>
                    {planning[jour][idx] !== '—' ? (
                      <div className="schedule-cell">{planning[jour][idx]}</div>
                    ) : (
                      <span style={{ color: '#9ca3af' }}>—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmploiTemps;
