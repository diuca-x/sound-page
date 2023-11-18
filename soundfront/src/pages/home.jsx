import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/home.css";

const Home = () =>{

    const navigate = useNavigate()


    return(
        <div className="home-container  "> 
            <Navbar/>
            <div className=" text-start mt-5 pt-5 ms-5 ps-5 border border-primary home_content_container">
                <h1>¡Descubre tu pasion por la Produccion Musical con Ableton Live!</h1>
                <h3 className="mt-4">Y preparate para firmar con una discografia en tan solo un mes!</h3>
                <button type="button" className="btn btn-primary rounded-pill contact_btn mt-5">Contactarme</button>  
                <div className="know_more">
                    <h4 className="know ">¿Queres saber mas?</h4> 
                    
                    <div className="arrow_div">
                        <a className="arrow_span" href="#">
                            <span class="bottom"><i class="fa-solid fa-angle-down fa-2xl  "></i></span>
                        </a>
                    </div>
                    
                </div>
            </div>    
            
        </div>
    )
}


export default Home

