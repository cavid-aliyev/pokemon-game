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
          title = "Layout title 1 "
          descr = "Layout Description 1"
          PokemonIMG={PokemonIMG}/>
    <Layout 
          title = "Layout title 2"
          descr = "Layout Description 2"
          colorBg/>
    <Layout
          title = "Layout title 3"
          descr = "Layout Description 3"
          PokemonIMG = {PokemonIMG}/>
    <Footer/>
    </>
  );
}

export default App;
