import React, { useState } from 'react'
import useGetCharacters from '../hooks/UseGetCharacters'
import CharacterCard from "./CharacterCard"
import Pagination from "./Pagination"
import "../styles/characters.css"

function Characters() {
  const { characters, info, loading, error, onNext, onPrevious } = useGetCharacters()
  const [filter, setFilter] = useState("")

  if (error) return <h2 style={{color: "white", textAlign: "center"}}>Error al cargar datos</h2>
  if (loading) return <h2 style={{color: "white", textAlign: "center"}}>Cargando...</h2>

  const filteredCharacters = characters.filter(char => 
    char.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleNext = () => { onNext(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const handlePrev = () => { onPrevious(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ margin: '20px', width: '100%', maxWidth: '400px' }}>
        <input 
          type="text"
          placeholder="Buscar personaje..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '25px',
            border: '2px solid #97ce4c',
            backgroundColor: '#202329',
            color: 'white',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p style={{ color: '#97ce4c' }}>No se encontraron personajes con ese nombre.</p>
        )}
      </div>

      <Pagination info={info} onPrev={handlePrev} onNext={handleNext} />
    </div>
  )
}

export default Characters