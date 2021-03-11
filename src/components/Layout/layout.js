import lstyle from './layout.module.css'


const Layout = ({title, descr, PokemonIMG, colorBg}) => {

    const backColor = colorBg ?  {backgroundColor: '#e2e2e2'} : null
    const imagePoki = {  backgroundImage: `url(${PokemonIMG})`}

    return (
        <section className={lstyle.root}>
            <div className={lstyle.wrapper}>
                <article style={{...backColor, ...imagePoki}}>
                    <div className={lstyle.title}>
                        <h3>{title}</h3>
                        <span className={lstyle.separator}></span>
                    </div>
                    <div className={`${lstyle.desc} ${lstyle.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout