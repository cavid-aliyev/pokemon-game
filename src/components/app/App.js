import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer'
import PokemonIMG from '../../assets/pokigame.jpg'

const App = () => {
  return (
    <>
    <Header 
          title = "This is title"
          descr = "This is Description!"/>
    <Layout
          title = "Layout title"
          descr = "Layout Description"
          PokemonIMG={PokemonIMG}/>
    <Layout 
          colorBg/>
    <Layout
          PokemonIMG = {PokemonIMG}/>
    <Footer/>
    </>
  );
}

export default App;
