import lstyle from './layout.module.css'


const Layout = ({title, PokemonIMG, colorBg, children}) => {


    const layoutStyle = {  
                backgroundImage: `url(${PokemonIMG})`,
                backgroundColor: colorBg 
    }

    return (
        <section className={lstyle.root}>
            <div className={lstyle.wrapper}>
                <article style={layoutStyle}>
                    <div className={lstyle.title}>
                        <h3>{title}</h3>
                        <span className={lstyle.separator}></span>
                    </div>
                    <div className={`${lstyle.desc} ${lstyle.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout