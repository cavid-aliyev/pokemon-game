import lstyle from './layout.module.css'


const Layout = ({title, descr, PokemonIMG, colorBg}) => {

    colorBg  = {
        backgroundColor : 'red'
    }



    return (
        <section className={lstyle.root}>
            <div className={lstyle.wrapper}>
                <article>
                    <div className={lstyle.title}>
                        <h3>{title}</h3>
                        <span className={lstyle.separator}></span>
                    </div>
                    <div className={lstyle.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout