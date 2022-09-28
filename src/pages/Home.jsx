import React from 'react'
import styled from 'styled-components'

import { GithubContext } from '../context/context'

import Card from '../components/card'
import earth from '../images/earth.png'

const Home = () => {
    const [inputUser, setInputUser] = React.useState('')
    const [active, setActive] = React.useState()
    const { userSearch } = React.useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputUser) {
            userSearch(inputUser)
            setActive(true)
        }
    }

    function RenderCard() {
        if(active) {
            return <Card />
        }
    }

    return (
        <HomeStyled>
            <HomeLeft>
                <HomeImage src={earth} />
            </HomeLeft>
            <HomeRight>
                <HomeTitle>GITHUB EXPLORER</HomeTitle>
                <HomeDesc>Encontre Devs espalhados por todo o planeta!</HomeDesc>

                <HomeForm onSubmit={handleSubmit}>
                    <HomeInput 
                        placeholder="Digite o usuário..." 
                        type="text"
                        value={inputUser}
                        onChange={(e) => {
                            setInputUser(e.target.value)
                        }}
                    />
                    <HomeButton type="submit">Pesquisar</HomeButton>
                </HomeForm>
                <RenderCard />
            </HomeRight> 
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
    background-color: var(--black-color);
    height: 100vh;

    @media screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 1201px) {
        padding: 100px;
    }

    @media screen and (min-width: 801px) and (max-width: 1200px) {
        padding: 40px;
    }

    @media screen and (max-width: 801px) {
        text-align: center;
        padding: 50px;
    }
`

const HomeLeft = styled.div`
    @media screen and (min-width: 800px) {
        width: 50%;
    }
`

const HomeImage = styled.img`
    @media screen and (min-width: 1201px) {
        height: 90vh;
        width: auto;
    }
    
    @media screen and (min-width: 801px) and (max-width: 1200px) {
        height: 50vh;
        width: auto;
    }

    @media screen and (max-width: 800px) {
        height: 35vh;
        width: auto;
        text-align: center;
    }
`

const HomeRight = styled.div`
    @media screen and (min-width: 800px) {
        width: 50%;
        text-align: left;
        margin-left: 100px;
    }
`

const HomeTitle = styled.h1`
    @media screen and (min-width: 1201px) {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 801px) and (max-width: 1201px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.4rem;
        margin: 20px 0 10px 0;
    }
`

const HomeDesc = styled.p`
    font-weight: 200;

    @media screen and (min-width: 1201px) {
        font-size: 1.2rem;
        letter-spacing: 1.6px;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.9rem;
    }
`

const HomeForm = styled.form`
    margin: 20px 0;
`

const HomeInput = styled.input`
    width: 60%;
    padding-left: 8px;
    background-color: var(--blue-color2);
    border: solid 1px var(--blue-color);
    border-radius: 5px 0 0 5px;
    color: var(--white-color);
    ::placeholder {
        color: #ffffff99;
        font-weight: 300;
    }

    @media screen and (min-width: 801px) {
        height: 40px;
    }

    @media screen and (max-width: 800px) {
        height: 30px;   
    }
`

const HomeButton = styled.button`
    width: auto;
    border-radius: 0 5px 5px 0;
    background-color: var(--blue-color);
    color: var(--white-color);
    font-weight: 500;
    
    @media screen and (min-width: 801px) {
        height: 40px;
        padding: 10px;
    }

    @media screen and (max-width: 800px) {
        height: 30px;
        width: 20%;
    }
`

export default Home