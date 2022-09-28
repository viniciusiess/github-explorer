import React, { useState } from 'react'

const axios = require('axios').default
axios.defaults.baseURL = 'https://api.github.com'

const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [repositories, setRepoisitories] = useState('')
    
    const userSearch = async(user) => {
        const res = await axios.get(`users/${user}`)
    
        if(res) {
            setUser(res.data)
            const { login } = res.data

            await Promise.allSettled([
                axios.get(`/users/${login}/repos`)
            ]).then((userData) => {
                const [repositories] = userData
                const fulfilledStatus = 'fulfilled'

                if(repositories.status === fulfilledStatus) {
                    setRepoisitories(repositories.value.data)
                }
            }).catch((err) => console.log(err))
        } else {
            console.log('usuário não encontrado')
        }
    }

    return (
        <GithubContext.Provider value={{ user, repositories, userSearch }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext }