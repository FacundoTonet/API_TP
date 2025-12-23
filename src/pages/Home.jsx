import React from 'react'

function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    
        justifyContent: 'center', 
        textAlign: 'center',      
        minHeight: '50vh',        
        padding: '20px'
    }

    const titleStyle = {
        fontSize: '6rem', 
        color: '#00b5cc', 
        textShadow: '0 0 10px #97ce4c', 
        margin: '20px 0',
        textTransform: 'uppercase'
    }

    const subtitleStyle = {
        fontSize: '2rem', 
        color: '#97ce4c',
        maxWidth: '700px', 
        lineHeight: '1.4'
    }

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Rick & Morty Api</h1>
            
            <p style={subtitleStyle}>
                Bienvenido al buscador de personajes más grande del multiverso.
            </p>

            <div style={{ color: '#888' }}>
                <p>Incluye todos los personajes de la serie, para verdaderos fans.</p>
            </div>
        </div>
    )
}

export default Home