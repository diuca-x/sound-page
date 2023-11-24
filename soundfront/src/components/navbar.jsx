import React from "react";
import "../styles/home.css"


const Navbar = ({toRef}) => {
    
    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid ">
                    <h1 className="navbar-brand text-light" href="#">BassLineage</h1>
                    <button className="navbar-toggler  custom-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon  "></span>
                    </button>
                    <div className="offcanvas offcanvas-end  menu_container " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title title" id="offcanvasDarkNavbarLabel"></h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start ps-4">
                        <li className="nav-item">
                            <p className=" nav_title">Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link text-light" href="#" onClick={() => {toRef("expect")}}>¿Que puedes esperar de estudiar produccion musical el Ableton Live con nosotros?</p>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">¿Que ofrecemos adicionalmente?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">¿Quien puede estudiar Produccion Musical con nosotros?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">¿Porque Ableton Live?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Ejemplos realizados por alumnos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contacto</a>
                        </li>
                        
                        </ul>
                        
                    </div>
                    </div>
                </div>
                </nav>
        </>

    )

}


export default Navbar