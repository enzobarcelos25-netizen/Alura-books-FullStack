import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
`
const Icones = styled.ul`

.icones {
    display: flex;
}
    
`

const icones = [perfil,sacola]

function IconesHeader() {
    return (   
        <Icones>
           {icones.map( (icone) => (
            <Icone><img src={icone} alt='icone'></img></Icone>
          ) ) }
      </Icones>
    )
}

export default IconesHeader
