import Header from '../componentes/Header';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimoLancamentos from '../componentes/UltimoLancamentos';


const AppConteiner = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg,#002F52 35%,#326589 100%);

  
`;  

function Home() {
  return (
    <AppConteiner>
      <Pesquisa />
    <UltimoLancamentos/>
    </AppConteiner>
    
  );
}

export default Home;
