import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import UserProfile from '../components/userProfile'
import Repos from '../components/repos'

import earthbackground from '../images/earthback.jpg'

const Profile = () => {
    return (
        <ProfileStyled>
            <ProfileLeft>
                <Link to="/">
                    <Back><AiOutlineArrowLeft />voltar</Back>
                </Link>
                <UserProfile />
            </ProfileLeft>
            <ProfileRight>
                <Repos />
            </ProfileRight>
        </ProfileStyled>
    )
}

const ProfileStyled = styled.div`
    background-image: url(${earthbackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 0%;
    position: relative;
    height: 100vh;
    
    @media screen and (min-width: 1201px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 801px) {
        padding: 80px 100px;
    }

    @media screen and (max-width: 800px) {
        padding: 50px;
    }
`

const ProfileLeft = styled.div`
    @media screen and (min-width: 1201px) {
        width: 50%;
    }
`

const Back = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProfileRight = styled.div``

export default Profile