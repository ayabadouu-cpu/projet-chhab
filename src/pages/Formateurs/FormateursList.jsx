import React from 'react';
import { mockFormateurs } from '../../data/mockFormateurs';

function FormateursList() {
  return (
    <div>
      <h1 className="page-title">Liste des formateurs</h1>
      <p className="page-subtitle">Gestion des formateurs du centre</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{mockFormateurs.length} formateur(s)</h3>
          <button className="btn-primary">+ Nouveau formateur</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Spécialité</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockFormateurs.map((f) => (
              <tr key={f.id}>
                <td>{f.matricule}</td>
                <td>{f.nom}</td>
                <td>{f.prenom}</td>
                <td>{f.specialite}</td>
                <td>{f.email}</td>
                <td>{f.telephone}</td>
                <td>
                  <button className="action-btn view">Voir</button>
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

export default FormateursList;
