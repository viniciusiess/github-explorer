import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

import { GithubContext } from '../context/context'

const Card = () => {
    const { user } = React.useContext(GithubContext)
    const {
        avatar_url,
        html_url,
        name,
        location,
        bio,
        login,
    } = user

    return (
        <CardStyled>
            <CardHeader>
                <CardHeaderLeft>
                    <CardProfile>
                        <CardAvatar>
                            <CardImage src={avatar_url} />
                        </CardAvatar>
                        <CardName>
                            <Name>{name}</Name>
                            <Login>{login}</Login>
                        </CardName>
                    </CardProfile>
                </CardHeaderLeft>
                <CardHeaderRight>
                    <CardButtonFollow href={html_url} target="_blank">FOLLOW</CardButtonFollow>
                </CardHeaderRight>
            </CardHeader>
            <CardBio>{bio}</CardBio>
            <CardLocation><GoLocation style={{ marginRight: '5px' }} />{location}</CardLocation>
            <Link to="/profile">
                <CardLink>ver mais <AiOutlineArrowRight style={{ marginLeft: '5px' }} /></CardLink>
            </Link>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    border: solid 1px var(--blue-color);
    background-color: var(--blue-color2);
    border-radius: var(--border-radius);
    height: auto;

    @media screen and (min-width: 1201px) {
        padding: 40px 40px;
        margin-top: 70px;
    }
    
    @media screen and (min-width: 801px) and (max-width: 1200px) {
        padding: 30px 30px;
        margin-top: 60px;
    }

    @media screen and (max-width: 800px) {
        padding: 30px 40px;
        margin-top: 40px;
    }
`

const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CardHeaderLeft = styled.div``

const CardProfile = styled.div`
    display: flex;
    align-items: center;
`

const CardAvatar = styled.div`
    background: rgb(3,60,78);
    background: linear-gradient(90deg, rgba(3,60,78,1) 0%, rgba(6,69,98,1) 25%, rgba(6,86,143,1) 50%, rgba(13,150,200,1) 75%, rgba(0,212,255,1) 100%);
    border-radius: 50%;
    width: 54px;
    height: 54px;
    margin: auto;
    display: flex;
    padding: 2px;
`

const CardImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const CardName = styled.div`
    margin: 0 20px;
    text-align: left;
`

const Name = styled.span`
    display: block;
    font-weight: 600;

    @media screen and (min-width: 1201px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }
`

const Login = styled.span`
    font-weight: 200;
    @media screen and (min-width: 1201px) {
        font-size: 0.8rem;
    }
    
    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
    }
`

const CardHeaderRight = styled.div``

const CardButtonFollow = styled.a`
    padding: 10px 20px;
    border-radius: 18px;
    font-weight: bold;
    background-color:var(--blue-color);
    color: var(--white-color);
    font-size: .7rem;
`

const CardBio = styled.p`
    text-align: left;
    line-height: 22px;

    @media screen and (min-width: 1201px) {
        font-size: 0.8rem;
        margin: 20px 0;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
        margin: 20px 0;
    }
`

const CardLocation = styled.span`
    float: left;
    
    @media screen and (min-width: 1201px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
    }
`

const CardLink = styled.button`
    background-color: transparent;
    color: var(--white-color);
    display: flex;
    align-items: center;
    float: right;
    font-weight: 600;

    @media screen and (min-width: 1201px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
    }
`

export default Card