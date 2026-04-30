import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockStagiaires } from '../../data/mockStagiaires';

function StagiaireDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stagiaire = mockStagiaires.find((s) => s.id === parseInt(id));

  if (!stagiaire) {
    return (
      <div>
        <h1 className="page-title">Stagiaire introuvable</h1>
        <button className="back-btn" onClick={() => navigate('/stagiaires')}>
          ← Retour
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className="back-btn" onClick={() => navigate('/stagiaires')}>
        ← Retour à la liste
      </button>

      <h1 className="page-title">
        {stagiaire.prenom} {stagiaire.nom}
      </h1>
      <p className="page-subtitle">CEF : {stagiaire.cef}</p>

      <div className="details-card">
        <h3>Informations personnelles</h3>
        <div className="details-grid">
          <div className="detail-item">
            <label>Nom complet</label>
            <span>
              {stagiaire.prenom} {stagiaire.nom}
            </span>
          </div>
          <div className="detail-item">
            <label>CEF</label>
            <span>{stagiaire.cef}</span>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <span>{stagiaire.email}</span>
          </div>
          <div className="detail-item">
            <label>Téléphone</label>
            <span>{stagiaire.telephone}</span>
          </div>
          <div className="detail-item">
            <label>Date de naissance</label>
            <span>{stagiaire.dateNaissance}</span>
          </div>
          <div className="detail-item">
            <label>Adresse</label>
            <span>{stagiaire.adresse}</span>
          </div>
        </div>
      </div>

      <div className="details-card">
        <h3>Informations académiques</h3>
        <div className="details-grid">
          <div className="detail-item">
            <label>Filière</label>
            <span>{stagiaire.filiere}</span>
          </div>
          <div className="detail-item">
            <label>Niveau</label>
            <span>{stagiaire.niveau}</span>
          </div>
          <div className="detail-item">
            <label>Groupe</label>
            <span>{stagiaire.groupe}</span>
          </div>
          <div className="detail-item">
            <label>Année</label>
            <span>{stagiaire.annee}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StagiaireDetails;
