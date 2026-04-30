import React from 'react';

const modules = [
  { id: 1, code: 'M101', intitule: 'Algorithmique', filiere: 'DEV', mhTotal: 60, formateur: 'Saidi Mohammed' },
  { id: 2, code: 'M102', intitule: 'Programmation Web', filiere: 'DEV', mhTotal: 90, formateur: 'Bennani Karim' },
  { id: 3, code: 'M103', intitule: 'Base de données', filiere: 'DEV', mhTotal: 75, formateur: 'El Alami Salma' },
  { id: 4, code: 'M201', intitule: 'Réseaux informatiques', filiere: 'TRI', mhTotal: 80, formateur: 'Tazi Hamza' },
  { id: 5, code: 'M202', intitule: 'Système d\'exploitation', filiere: 'TRI', mhTotal: 70, formateur: 'Tazi Hamza' },
  { id: 6, code: 'M301', intitule: 'Marketing digital', filiere: 'GE', mhTotal: 60, formateur: 'Idrissi Amina' },
  { id: 7, code: 'M302', intitule: 'Comptabilité générale', filiere: 'GE', mhTotal: 85, formateur: 'Idrissi Amina' },
  { id: 8, code: 'M104', intitule: 'Frameworks JavaScript', filiere: 'DEV', mhTotal: 100, formateur: 'Bennani Karim' },
];

function ModulesList() {
  return (
    <div>
      <h1 className="page-title">Liste des modules</h1>
      <p className="page-subtitle">Modules de formation par filière</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{modules.length} module(s)</h3>
          <button className="btn-primary">+ Nouveau module</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Intitulé</th>
              <th>Filière</th>
              <th>MH Total</th>
              <th>Formateur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((m) => (
              <tr key={m.id}>
                <td>{m.code}</td>
                <td>{m.intitule}</td>
                <td>{m.filiere}</td>
                <td>{m.mhTotal}h</td>
                <td>{m.formateur}</td>
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

export default ModulesList;
