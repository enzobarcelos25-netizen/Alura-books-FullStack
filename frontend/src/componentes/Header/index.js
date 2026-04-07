import OpcoesHeader from '../Opcoes Header'
import Logo from '../../componentes/logo'
import IconesHeader from '../Icones Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContanier = styled.header`
    background-color: #FFF;
    display: flex;  
    align-items: center;
    justify-content: center;
`

function Header () {
    return (    
    <HeaderContanier>
        <Link to="/">
        <Logo/>
        </Link>
        
        <OpcoesHeader/>
        <IconesHeader/> 
    </HeaderContanier>
    )
}

export default Header