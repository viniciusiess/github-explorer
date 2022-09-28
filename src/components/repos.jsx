import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { GithubContext } from '../context/context'

const Repos = () => {
    const { repositories } = React.useContext(GithubContext)

    return (
        <RepoStyled>
            {repositories.map((repos) => {
                const { name, html_url, description, language, created_at } = repos
                
                let dateFormatt = new Date(created_at).toLocaleDateString()

                return (
                    <>
                        <RepoContainer>
                            <RepoHeader>
                                <RepoName>{name}</RepoName>
                                <RepoCreated>criado em: {dateFormatt}</RepoCreated>
                            </RepoHeader>
                            <RepoDesc>{description}</RepoDesc>
                            <RepoFooter>
                                <RepoLanguage>Linguagem: <strong>{language}</strong></RepoLanguage>
                                <RepoLink href={html_url} target="_blank">ver mais <AiOutlineArrowRight style={{ marginLeft: '4px' }} /></RepoLink>
                            </RepoFooter>
                        </RepoContainer>
                    </>
                )
            })}
        </RepoStyled>
    )
}

const RepoStyled = styled.div`
    overflow-y: scroll;
    scrollbar-base-color: gold;

    @media screen and (min-width: 1201px) {
        height: 580px;
    }

    @media screen and (max-width: 1200px) {
        height: 150px;
        max-width: 600px;
        margin: 20px auto;
    }
`

const RepoContainer = styled.div`
    border: 1px solid var(--blue-color);
    background-color: var(--blue-color2);
    border-radius: var(--border-radius);
    
    @media screen and (min-width: 1201px) {
        padding: 30px;
        margin: 30px 0;
    }

    @media screen and (max-width: 1200px) {
        padding: 20px;
        margin: 20px 0;
    }
`

const RepoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const RepoName = styled.span`
    font-weight: 600;

    @media screen and (min-width: 1201px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }
`

const RepoCreated = styled.span`
    font-size: 0.8rem;
`

const RepoDesc = styled.p`
    @media screen and (min-width: 1201px) {
        margin: 10px 0;
        font-weight: 300;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.8rem;
        font-weight: 200;
        margin: 10px 0;
    }
`

const RepoFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const RepoLanguage = styled.span`
    font-size: 0.8rem;
    font-weight: 200;
`

const RepoLink = styled.a`
    color: var(--white-color);
    font-weight: 500;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
`

export default Repos