import React, { useState, useEffect } from 'react'

export default function Exercise(){
    const [exercise, setExcerise] = useState({})
    const [url, setUrl] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const apiCall = async () => {
            const apiKey = 'fd84c1f8659a1a9e075f61a9559cf5aefa524e33'
            const exerciseUrl = `https://wger.de/api/v2/${search}`
            const res = await fetch(exerciseUrl)
            const json = await res.json()
            console.log(json)
            setExcerise(json)
        }
        apiCall()
    }, [url])

    const handleSearch = e => {
       e.preventDefault()
       setSearch(url)
       setUrl('')
    }

    const handleChange = e => {
        setUrl(e.target.value)
    }

    return (
        <div>
            <form onSubmit={ handleSearch }>
                <input 
                    type='text'
                    value={ url }
                    onChange={ handleChange }
                />
                <input 
                    type='submit'
                />
            </form>
        </div>
    )
}