import React from "react";
import "../styles/home.css"

const Navbar = () => {
    return (
        <>
            <nav class="navbar ">
                <div class="container-fluid ">
                    <h1 class="navbar-brand text-light" href="#">BassLineage</h1>
                    <button class="navbar-toggler  custom-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon  "></span>
                    </button>
                    <div class="offcanvas offcanvas-end  menu_container " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title title" id="offcanvasDarkNavbarLabel"></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-start ps-4">
                        <li class="nav-item">
                            <a class="nav-link nav_title" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">¿Que puedes esperar de estudiar produccion musical el Ableton Live con nosotros?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">¿Que ofrecemos adicionalmente?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">¿Quien puede estudiar Produccion Musical con nosotros?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">¿Porque Ableton Live?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Ejemplos realizados por alumnos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Contacto</a>
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