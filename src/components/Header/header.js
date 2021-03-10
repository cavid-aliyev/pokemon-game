import hstyle from './header.module.css';


const Header = ({title, descr}) =>{
    return (
        <header className={hstyle.root}>
            <div className={hstyle.forest}></div>
            <div className={hstyle.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

export default Header;