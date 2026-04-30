import React from 'react';
import { mockFilieres } from '../../data/mockFilieres';

function FilieresList() {
  return (
    <div>
      <h1 className="page-title">Liste des filières</h1>
      <p className="page-subtitle">Filières disponibles au centre</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{mockFilieres.length} filière(s)</h3>
          <button className="btn-primary">+ Nouvelle filière</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Intitulé</th>
              <th>Niveau</th>
              <th>Durée</th>
              <th>Secteur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockFilieres.map((f) => (
              <tr key={f.id}>
                <td>{f.code}</td>
                <td>{f.intitule}</td>
                <td>
                  <span className="badge success">{f.niveau}</span>
                </td>
                <td>{f.duree}</td>
                <td>{f.secteur}</td>
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

export default FilieresList;
