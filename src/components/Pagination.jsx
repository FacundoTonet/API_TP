import React from 'react';

const Pagination = ({ info, onPrev, onNext }) => {
    
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px',
        width: '100%'
    };

    const buttonBaseStyle = {
        padding: '12px 25px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        textTransform: 'uppercase',
        transition: '0.3s'
    };

    return (
        <nav style={navStyle}>
            {info?.prev && (
                <button 
                    onClick={onPrev} 
                    style={{ ...buttonBaseStyle, backgroundColor: '#97ce4c', color: '#202329' }}
                >
                    &lt; Anterior
                </button>
            )}

            {info?.next && (
                <button 
                    onClick={onNext} 
                    style={{ ...buttonBaseStyle, backgroundColor: '#00b5cc', color: 'white' }}
                >
                    Siguiente &gt;
                </button>
            )}
        </nav>
    );
};

export default Pagination;