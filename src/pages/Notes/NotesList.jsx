import React from 'react';

const notes = [
  { id: 1, stagiaire: 'Amrani Yassine', module: 'Algorithmique', cc: 14, ef: 15, tp: 16, moyenne: 15.0 },
  { id: 2, stagiaire: 'Bekkali Salma', module: 'Programmation Web', cc: 17, ef: 18, tp: 17, moyenne: 17.3 },
  { id: 3, stagiaire: 'Chakir Omar', module: 'Base de données', cc: 12, ef: 11, tp: 13, moyenne: 12.0 },
  { id: 4, stagiaire: 'Daoudi Imane', module: 'Frameworks JS', cc: 16, ef: 17, tp: 15, moyenne: 16.0 },
  { id: 5, stagiaire: 'El Khadir Hamza', module: 'Algorithmique', cc: 8, ef: 9, tp: 10, moyenne: 9.0 },
  { id: 6, stagiaire: 'Fadili Nour', module: 'Programmation Web', cc: 13, ef: 14, tp: 15, moyenne: 14.0 },
  { id: 7, stagiaire: 'Ghazi Anas', module: 'Base de données', cc: 18, ef: 19, tp: 18, moyenne: 18.3 },
];

function getMoyenneBadge(moy) {
  if (moy >= 14) return 'success';
  if (moy >= 10) return 'warning';
  return 'danger';
}

function NotesList() {
  return (
    <div>
      <h1 className="page-title">Notes des stagiaires</h1>
      <p className="page-subtitle">Évaluations et résultats</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{notes.length} évaluation(s)</h3>
          <button className="btn-primary">+ Nouvelle note</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Stagiaire</th>
              <th>Module</th>
              <th>CC</th>
              <th>EF</th>
              <th>TP</th>
              <th>Moyenne</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((n) => (
              <tr key={n.id}>
                <td>{n.stagiaire}</td>
                <td>{n.module}</td>
                <td>{n.cc}</td>
                <td>{n.ef}</td>
                <td>{n.tp}</td>
                <td>
                  <span className={`badge ${getMoyenneBadge(n.moyenne)}`}>
                    {n.moyenne.toFixed(2)} / 20
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Modifier</button>
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

export default NotesList;
