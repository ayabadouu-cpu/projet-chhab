import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockStagiaires } from '../../data/mockStagiaires';

function StagiairesList() {
  const [search, setSearch] = useState('');

  const filtered = mockStagiaires.filter(
    (s) =>
      s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.prenom.toLowerCase().includes(search.toLowerCase()) ||
      s.cef.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="page-title">Liste des stagiaires</h1>
      <p className="page-subtitle">Gérer tous les stagiaires inscrits</p>

      <div className="table-container">
        <div className="table-header">
          <h3>{filtered.length} stagiaire(s)</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button className="btn-primary">+ Nouveau stagiaire</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>CEF</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Filière</th>
              <th>Niveau</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.cef}</td>
                <td>{s.nom}</td>
                <td>{s.prenom}</td>
                <td>{s.filiere}</td>
                <td>{s.niveau}</td>
                <td>
                  <Link to={`/stagiaires/${s.id}`}>
                    <button className="action-btn view">Voir</button>
                  </Link>
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

export default StagiairesList;
