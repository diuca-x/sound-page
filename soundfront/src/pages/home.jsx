import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/home.css";
import computadora from "../img/computadora.png"

const Home = () =>{

    const knowMoreRef = useRef(null)
    const scrollToKnowMore = () => {
        if (knowMoreRef.current) {
          knowMoreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <div className="home-container  "> 
            <Navbar/>
            <div className=" text-start mt-sm-5 pt-sm-5 ms-sm-5 ps-sm-5  home_content_container">
                <h1>¡Descubre tu pasion por la Produccion Musical con Ableton Live!</h1>
                <h3 className="mt-4">Y preparate para firmar con una discografia en tan solo un mes!</h3>
                <button type="button" className="btn btn-primary rounded-pill contact_btn mt-5">Contactarme</button>  
                <div className="know_more">
                    <h4 className="know ">¿Queres saber mas?</h4> 
                    
                    <div className="arrow_div  mt-3 p-2">
                        <i class="fa-solid fa-angle-down fa-2xl arrow" onClick={scrollToKnowMore}></i>   
                    </div>
                    
                </div>
            </div>    
        </div>
        <div className="row know_more_container m-0 " ref={knowMoreRef}>
                <div className="col-sm-6  computer_container ">
                    <img src={computadora} className="computer_img" alt="..."/>
                </div>
                <div className="col-sm-6 about_text">
                    <p className="about">Si alguna vez soñaste con convertirte en un productor musical y ver tus pistas en los 
                        escenarios mas grandes del mundo, ¡estas en el lugar adecuado!
                    </p>
                    <p className="about">
                        La produccion musical es un arte emocionante y creativo que te permite dar vida a tus
                        ideas sonoras. ¿Y que mejor manera de empezar que con Ableton Live, una de las plataformas mas potentes y
                        versatiles a del mundo para la creacion musical?
                    </p>
                </div>
        </div>
        
        </>
    )
}


export default Home

