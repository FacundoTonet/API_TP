import React from 'react';

function CharacterCard({ character }) {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-body">
                <h3 style={{ color: '#00b5cc' }}>{character.name}</h3>
                
                <p><strong>Género:</strong> {character.gender}</p>
                <p><strong>Origen:</strong> {character.origin.name}</p>
                <p><strong>Ubicación:</strong> {character.location.name}</p>
                
                {character.type && (
                    <p><strong>Tipo:</strong> {character.type}</p>
                )}

                <div style={{ marginTop: '10px' }}>
                    <span className={`status ${character.status.toLowerCase()}`}>
                    Especie: {character.species}
                    </span>
                </div>
                <p>Aparece en {character.episode.length} episodios</p>
            </div>
        </div>
    );
}

export default CharacterCard;