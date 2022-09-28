import React from 'react'
import styled from 'styled-components'
import { FiUsers } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

import { GithubContext } from '../context/context'

const UserProfile = () => {
    const { user } = React.useContext(GithubContext)
    const {
        avatar_url,
        name,
        login,
        bio,
        followers,
        following,
        location,
        html_url,
    } = user

    return (
        <UserProfileStyled>
            <UserImageProfile>
                <UserImage src={avatar_url} />
            </UserImageProfile>
            <UserName>{name}</UserName>
            <UserLogin>{login}</UserLogin>
            <UserFollow href={html_url} target="_blank"><FollowButton>FOLLOW</FollowButton></UserFollow>
            <UserBio>{bio}</UserBio>
            <UserFollowing>
                <FiUsers style={{ marginRight: '5px' }} />
                <Followers><strong>{followers}</strong> Seguindo</Followers>
                <Following><strong>{following}</strong> Seguidores</Following>
            </UserFollowing>
            <UserLocation><GoLocation style={{ marginRight: "5px" }} />{location}</UserLocation>
        </UserProfileStyled>
    )
}

const UserProfileStyled = styled.div`
    border: solid 1px var(--blue-color);
    background-color: var(--blue-color2);
    border-radius: var(--border-radius);
    height: auto;

    @media screen and (min-width: 1201px) {
        padding: 40px;
        width: 360px;
    }
    
    @media screen and (max-width: 1200px) {
        padding: 20px 50px;
        margin: 0 auto;
        max-width: 600px;
    }
`

const UserImageProfile = styled.div`
    background: rgb(3,60,78);
    background: linear-gradient(90deg, rgba(3,60,78,1) 0%, rgba(6,69,98,1) 25%, rgba(6,86,143,1) 50%, rgba(13,150,200,1) 75%, rgba(0,212,255,1) 100%);
    border-radius: 50%;
    margin: auto;
    display: flex;

    @media screen and (min-width: 1201px) {
        width: 190px;
        height: 190px;
        padding: 5px;
    }
    
    @media screen and (max-width: 1200px) {
        width: 140px;
        height: 140px;
        padding: 5px;
    }
`

const UserImage = styled.img`
    border-radius: 50%;   

    @media screen and (min-width: 1201px) {
        width: 180px;
        height: 180px;
    }
    
    @media screen and (max-width: 1200px) {
        width: 130px;
        height: 130px;
    }
`

const UserName = styled.span`
    display: block;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 10px 0 2px 0;
`

const UserLogin = styled.span`
    display: block;
    font-weight: 200;
    color: #eee;
    margin-bottom: 20px;
`

const UserFollow = styled.a``

const FollowButton = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 4px;
    background-color: var(--blue-color);
    font-weight: bold;
    color: var(--white-color);
    font-size: 0.9rem;
`

const UserBio = styled.p`
    font-size: 0.8rem;
    font-weight: 200;
    margin-top: 20px;
    line-height: 20px;
`

const UserFollowing = styled.div`
    margin: 20px 0;
    font-size: 0.8rem;
    color: #fff;
`

const Followers = styled.span`
    margin-right: 5px;

`

const Following = styled.span``

const UserLocation = styled.span`
    display: block;
    font-size: 0.8rem;
`

export default UserProfile