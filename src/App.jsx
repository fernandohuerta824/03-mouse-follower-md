import { useState, useEffect } from 'react'

function App () {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: -20, y: -20 })
    useEffect(() => {
        const handleMove = event => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }

        if(enabled) {
            window.addEventListener('pointermove', handleMove)
        }

        return () => {
            window.removeEventListener('pointermove', handleMove)
            setPosition({ x: -20, y: -20 })
        }
    }, [enabled])

    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enabled])

    const buttonTexto = enabled ? 'Desactivar' : 'Activar'

    return (
        <main>
            <div style={{
                position: 'absolute',
                backgroundColor: '#09f',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}></div>
            <button onClick={() => setEnabled(!enabled)}>{buttonTexto} Seguir Puntero</button>
        </main>
    )
}

export default App
