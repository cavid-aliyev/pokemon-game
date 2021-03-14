import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import PokemonIMG from '../../assets/backfon.png';
import Photo from '../../assets/backfontwo.jpg';
import PokemonCard from '../PokemonCard';

import './App.css'

const POKEMONS = [
  {
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
      "top": "A",
      "right": 2,
      "bottom": 7,
      "left": 5
    }
  },
  {
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    },
    "type": "poison",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "name": "arbok",
    "base_experience": 157,
    "height": 35,
    "id": 24,
    "values": {
      "top": 5,
      "right": 9,
      "bottom": "A",
      "left": "A"
    }
  },
  {
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "type": "electric",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "name": "pikachu",
    "base_experience": 112,
    "height": 4,
    "id": 25,
    "values": {
      "top": 8,
      "right": "A",
      "bottom": 9,
      "left": 6
    }
  },
  {
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
    },
    "type": "grass",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "id": 1,
    "values": {
      "top": 8,
      "right": 4,
      "bottom": 2,
      "left": 7
    }
  },
  {
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 65
    },
    "type": "fire",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name": "charmander",
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "values": {
      "top": 7,
      "right": 6,
      "bottom": 1,
      "left": 4
    }
  }
];

const App = () => {


  return (
    <>
    <Header 
          title = "Pokemon Carts"
          descr = "Returning to the world of collecting pokemon cards?"/>
    <Layout
          title = "About Pokemons "
          PokemonIMG={PokemonIMG}>

            <p>The legendary world of Pokémon first reached Australian and New Zealand shores in 1998 with Pokémon Red Version and Pokémon Blue Version for Game Boy, becoming an instant sensation that transcended fans of all ages and backgrounds.

Since the 1996 debut of Pokémon Red and Pokémon Green for Game Boy in Japan, this iconic series has sold more than 279 million video games globally, with avid Aussie and Kiwi Pokémon fans continuing to grow their Pokémon collections.</p>

      </Layout>
    <Layout 
          title = "Cards"
          colorBg={'#f7f538'}>

            <p>Pokémon are raised and commanded by their owners (called “Trainers”). During their adventures, Pokémon grow, level up and become more experienced and even, on occasion, evolve into stronger Pokémon.

There are over a dozen different types of Pokémon, such as Fire type, Psychic type, and Dragon type. Every Pokémon type comes with both advantages as well as disadvantages when battling different Pokémon types.

For instance, a Fire type Pokémon has the edge against Grass type Pokémon, but will be at a disadvantage against Water type Pokémon. This makes strategic thinking, positioning and use of the Pokémon in your team a crucial part of battles. 
            </p>

            <div className="flex">
                  {
                   POKEMONS.map((item) => <PokemonCard key={item.id} cards = {item}/>)
                  }
            </div>

      </Layout>
    <Layout
          title = "Why Pokemons?"
          PokemonIMG = {PokemonIMG}>
            <p>The first Pokémon video games were released in Australia and New Zealand for the Game Boy in 1998, and the series has driven the popularity of Pokémon ever since. Pokémon games have appeared on Nintendo systems including Nintendo 3DS and Wii U.

In most games, players play as Trainers to undertake adventures with their Pokémon in search of new types of Pokémon to add to their collection, participate in battles with other Trainers and Gym Leaders to obtain Gym Badges and to explore mystical new lands.</p>
      </Layout>
    <Footer/>
    </>
  );
}

export default App;
