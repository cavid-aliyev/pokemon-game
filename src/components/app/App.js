import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import PokemonIMG from '../../assets/pokigame.jpg'

const App = () => {
  return (
    <>
    <Header 
          title = "This is title"
          descr = "This is Description!"/>
    <Layout
          title = "Layout title 1 "
          PokemonIMG={PokemonIMG}>

            <p>Layout Description 1</p>

      </Layout>
    <Layout 
          title = "Layout title 2"
          colorBg={'#e2e2e2'} >

            <p>Layout Description 2</p>

      </Layout>
    <Layout
          title = "Layout title 3"
          PokemonIMG = {PokemonIMG}>
            <p>Layout Description 3</p>
      </Layout>
    <Footer/>
    </>
  );
}

export default App;
