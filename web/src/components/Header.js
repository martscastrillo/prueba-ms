const Header = (props) => {
    return(
        <header>
        <nav className="header_nav">
            <a href="https://www.mediasmart.io/">
                <img
                    className="logo_image"
                    src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/mediasmartLogo.svg"
                    alt="Mediasmart Logo"
                />
            </a>
            <div className="burguer_menu">
                <div className={props.burger} onClick={props.handleBurger}>
                    <span></span>
                </div>
            </div>

            <div className="div_menu">
                <ul className="navlist">
                    <li className="navlist__element">solutions</li>
                    <li className="navlist__element">resources</li>
                    <li className="navlist__element">about us</li>
                    <li className="navlist__element--border">log in</li>
                    <li className="navlist__element--border">sign up</li>
                </ul>
            </div>
        </nav>
    </header>
    );
    }
    export default Header;