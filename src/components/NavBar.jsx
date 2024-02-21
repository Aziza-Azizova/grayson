import logo from '../assets/images/Logo_black.svg';
import search from '../assets/images/icons/search.svg';

function NavBar() {
    return (
        <div>
            <div className='container'>
                <div className="nav">
                    <a className="" href="/"><img src={logo} alt="logo" /></a>
                    <ul className='nav__menu'>
                        <li className='nav__menu-txt'><a href="/">HOME</a></li>
                        <li className='nav__menu-txt'><a href="/">PAGES</a></li>
                        <li className='nav__menu-txt'><a href="/">PORTFOLIO</a></li>
                        <li className='nav__menu-txt'><a href="/">BLOG</a></li>
                        <li className='nav__menu-txt'><a href="/">ABOUT</a></li>
                        <li className='nav__menu-txt'><a href="/">SHORTCODES</a></li>
                    </ul>
                    <div className="search">
                        <input type="text" className='search__inp' placeholder='Search' />
                        <button className='search__btn'><img src={search} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="header__title">
                    <h1 className="header__title-text">Amazing Shop Layouts</h1>
                    <p className="header__title-parag">Grayson Collection</p>
                    <button className='header__title-btn'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar