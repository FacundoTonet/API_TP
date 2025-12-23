import { useState, useEffect } from "react"
import { API_URL } from "../config"


const useGetCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({})

    const getCharacters = async (url) => {
        setError(null)
        setLoading(true)

        try {
            const respuesta = await fetch(`${url}`)

            if (!respuesta.ok) {
                throw new Error("Error, no se pudieron obtener los personajes")
            }

            const data = await respuesta.json()

            setCharacters(data.results)
            setInfo(data.info)

        } catch (error) {
            console.error("Error realizando fetch a la api", error)
            setError(error)
            setCharacters([])
            setInfo({})
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (API_URL) {
            getCharacters(`${API_URL}/character`)
        } else {
            setError(new Error("Falta la url para realizar fetch"))
        }
    }, [API_URL] )

    const onPrevious = () => {
        if (info.prev) {
            getCharacters(info.prev)
        }
    }

    const onNext = () => {
        if (info.next) {
            getCharacters(info.next)
        }
    }

    return {
        characters,
        info,
        loading,
        error,
        onPrevious,
        onNext,
    }
}

export default useGetCharacters