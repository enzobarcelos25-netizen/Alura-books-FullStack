
import  {livros}  from './dadosUltimoLancamentos'
import CardRecomenda from '../CardRecomenda'
import styled from "styled-components"
import imagemLivro from "../../imagens/livro2.png"
import { Titulo } from '../Titulo'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimoLancamentos() {
    return(
        <UltimosLancamentosContainer>
        
            <Titulo 
            cor='#EB9B00' 
            tamanhoFonte ='36px'
            >
                Último Lançamentos
            </Titulo>
            <NovosLivrosContainer> 
                {livros.map ( livros => (
                <img 
                    src={livros.src} 
                    alt={livros.nome}
                    />
        ))}
            </NovosLivrosContainer> 
            <CardRecomenda 
                tituloitulo='Talvez você se interesse por'
                subtitulo= 'Angular 11'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
        
        
    )
}

export default UltimoLancamentos