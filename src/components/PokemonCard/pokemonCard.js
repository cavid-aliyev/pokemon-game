import cstyle from './pokemonCard.module.css'; 
import cardBackSide from './assets/card-back-side.jpg';
import {useState} from 'react';

const PokemonCard = ({cards}) =>{

    const [isActive, setActive] = useState(false)

    const handleCLick = () => {
        setActive(true)
    }


    return (
        <div className={cstyle.root} onClick={handleCLick}>
      <div className={`${cstyle.pokemonCard} ${isActive ? cstyle.active : ''}`}>
        <div className={cstyle.cardFront}>
            <div className={`${cstyle.wrap} ${cstyle.front}`}>
                <div className={`${cstyle.pokemon} ${cstyle[cards.type]}`}>
                    <div className={cstyle.values}>
                        <div className={`${cstyle.count} ${cstyle.top}`}>{cards.values.top}</div>
                        <div className={`${cstyle.count} ${cstyle.right}`}>{cards.values.right}</div>
                        <div className={`${cstyle.count} ${cstyle.bottom}`}>{cards.values.bottom}</div>
                        <div className={`${cstyle.count} ${cstyle.left}`}>{cards.values.left}</div>
                    </div>
                    <div className={cstyle.imgContainer}>
                        <img src={cards.img} alt={cards.name} />
                    </div>
                    <div className={cstyle.info}>
                        <span className={cstyle.number}>#{cards.id}</span>
                        <h3 className={cstyle.name}>{cards.name}</h3>
                        <small className={cstyle.type}>Type: <span>{cards.type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={cstyle.cardBack}>
            <div className={`${cstyle.wrap} ${cstyle.back}`}>
                <img src={cardBackSide} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>
)
}

export default PokemonCard