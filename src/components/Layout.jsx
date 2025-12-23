import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logoHeader from '/rickandmortygif.gif' 

function Layout() {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#202329', minHeight: '100vh' }}>
            <header style={{ 
                padding: '25px 0', 
                borderBottom: '2px solid #97ce4c',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',    
                gap: '5px'              
            }}>
                
                <img 
                    src={logoHeader} 
                    alt="Rick and Morty Logo" 
                    style={{ 
                        width: '600px', 
                        filter: 'drop-shadow(0 0 20px #000000ff)' 
                    }} 
                />

                <nav style={{ display: 'flex', gap: '30px' }}>
                    <Link to="/" style={{
                        color: '#97ce4c',
                        fontSize: '5rem',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        filter: 'drop-shadow(0 0 50px #2600ffff)'
 
                    }}>
                        |Inicio|
                    </Link>

                    <NavLink to="/characters" style={({ isActive }) => ({
                        color: isActive ? '#00b5cc' : '#97ce4c',
                        fontSize: '5rem',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        filter: 'drop-shadow(0 0 50px #2600ffff)'

                    })}>
                        |Personajes|
                    </NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout