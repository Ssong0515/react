function Chap3_nav(props){
    return (
        <nav className={`navbar navbar-expand-sm navbar-light bg-white fixed-top shadow px-3`}>
            <a className={`navbar-brand`}>
                {props.brand}
            </a>
            <ul className={`navbar-nav ms-auto`}>
                <li className={`nav-item`}>
                    <a href={"#"} className={`nav-link text-dark`}>{props.menu1}</a>
                </li>
                <li className={`nav-item`}>
                    <a href={'#'} className={`nav-link text-dark`}>{props.menu2}</a>
                </li>
                <li className={`nav-item`}>
                    <a href={'#'} className={`nav-link text-dark`}>{props.menu3}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Chap3_nav;