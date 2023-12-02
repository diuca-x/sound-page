import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/home.css";
import "../styles/expect.css";
import "../styles/aditional.css";
import "../styles/who.css";
import "../styles/examples.css";
import computadora from "../img/computadora.png"
import banner from "../img/banner.jpg"


const Home = () =>{

    const knowMoreRef = useRef(null)
    const ExpectRef = useRef(null)
    


    const toRef = (section) => {
        let ref
        switch (section){
            case "expect":
                ref = ExpectRef
                break
            case 'know_more':
                ref = knowMoreRef
                break;
        }
        
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
          }
      };
      
    

    return(
        <>
        <div className="home-container"> 
            <Navbar toRef = {toRef} />
            <div className=" text-start mt-sm-5 pt-sm-5 ms-sm-5 ps-sm-5  home_content_container">
                <h1>¡Descubre tu pasion por la Produccion Musical con Ableton Live!</h1>
                <h3 className="mt-4">Y preparate para firmar con una discografia en tan solo un mes!</h3>
                <button type="button" className="btn btn-primary rounded-pill contact_btn mt-5">Contactarme</button>  
                <div className="know_more">
                    <h4 className="know ">¿Queres saber mas?</h4>  
                    <div className="arrow_div  mt-3 p-2" onClick={() => {toRef("know_more")}}>
                        <i className="fa-solid fa-angle-down fa-2xl arrow" ></i>   
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
        <div className="row expect_container m-0" ref={ExpectRef} >
            <div className="col  mt-3  expect_col">
                 <h2 className="expect_title">¿Que puede esperar de estudiar produccion musical en ableton live con nosotros?</h2>   
            
            
                 <p className="expect_text ">
                    En nuestro curso de produccion musical centrado en Ableton Live, te sumergiras en el emocionante mundo de 
                    la musica electronica y la produccion contemporanea. Aprenderas desde lo basico hasta tecnicas avanzadas
                    para crear pistas asombrosas que capturaran la esencia de tu creatividad.
                 </p>
                 <p className="expect_text mb-5 ">
                    Pero eso no es todo. No nos detenemos en la creacion de las pistas, tambien te enseñaremos las complejidades
                    del proceso de mezcla y masterizacion, poniendo un enfasis especial en la calidad sonora. Exploraremos el uso
                    experto de compresores, ecualizadores y exitacion hipocaustica para garantizar que cada nota, cada ritmo
                    y cada detalle se perciban con una claridad y profundidad excepcionales. 
                 </p>
            </div>
            
        </div>
        <div className="row additional_container m-0"  >
            <div className="col  aditional_col">
                <div className="row w-100 d-flex justify-content-center">
                    <h2 className="aditional_title mt-5">¿Que ofrecemos adicionalmente?</h2>   
                </div>
                <div className="row aditional_row">
                    <div className="col-5 additional_content_box  "> 
                        <h3 className="mt-3">Sample exclusivo</h3>
                        <p className="mt-3">
                            Al inscribirte, recibiras una coleccion exclusiva de samples seleccionados cuidadosamente para inspirarte
                            desde el primer dia. Estos samples te daran una base solida para comenzar tus primeras 
                            producciones musicales.
                        </p>
                    </div>
                    <div className="col-5 additional_content_box "> 
                        <h3 className="mt-3">Aprendizaje rapido</h3>
                        <p className="mt-3">
                            En tan solo un mes, te garantizamos que habras dominado las herramientas basicas de Ableton Live. Nuestro enfoque
                            pratico y personalizado te permitira progresar rapidamente y comenzar a crear tus propias pistas de inmediato
                        </p>
                    </div>
                </div>
                <div className="row aditional_row ">
                    <div className="col-5 additional_content_box "> 
                        <h3 className="mt-3">Flexibilidad total</h3>
                        <p className="mt-3">
                            Creemos en el poder de la autonomia del estudiante. Por eso, tu decides hasta cuando quieres tener clases. Te
                            ofrecemos la flexibiliadad de programar tus lecciones de acuerdo a tu propio ritmo y agenda
                        </p>
                    </div>
                    <div className="col-5 additional_content_box "> 
                        <h3 className="mt-3">Variedad de opciones</h3>
                        <p className="mt-3">
                            Si prefieres explorar por tu cuenta primero, tambien ofrecemos acceso a una variedad de cursos pregrabados de 
                            diferentes generos e industrias, haciendo hincapie en todos los subgeneros de la musica electronica. Asi puedes
                            aprender a tu propio ritmo y segun tus intereses antes de unirte a las clases en vivo. 
                        </p>
                    </div>
                </div>
                <div className="row aditional_buton_row">
                    <button type="button" className="btn btn-primary rounded-pill contact_aditional_btn ">Quiero hacer el curso!</button>  
                </div>
            </div>
            
        </div>
        <div className="banner_box m-0 p-0">
            
        </div>
        <div className="row who_container m-0"  >
            <div className="col  who_col ">
                <div className="row w-100 d-flex justify-content-center">
                    <h2 className=" mt-5">¿Quien puede estudiar Produccion Musical con nosotros?</h2>
                    <h2 className=" who_title mt-2">¡Todos pueden!</h2>     
                </div>
                <div className="row who_first_row">
                    <p className="who_text">
                        En nuestro curso, creemos firmemente que la musica y la produccion no tienen barreras. No importa tu nivel
                        de experiencia o habilidad musical. Todos tienen la capacidad de aprender y crecer. Nuestros instrucores son
                        apasionados expertos en el campo, con años de experiencia y conocimientos didacticos, dispuestos a 
                        guiarte en cada paso del camino 
                    </p>
                </div>
                <div className="row who_first_row mt-5">
                    <p className="who_text">
                        Recuerda, los grandes productores no nacen ¡se hacen! Con la dedicacion adecuada y la guia correcta, puedes
                        llevar tus sueños musicales mas alla de lo que alguna vez imaginaste
                    </p>
                </div>
                
                
                
            </div>
            
        </div>
        <div className="row examples_container m-0">
            <div className="col examples_col">
                <div className="row w-100 d-flex justify-content-center">
                    <h2 className=" example_title mt-5">¿Porque Ableton Live?</h2>
                </div>

                <div className="example_row">
                    <p className="example_text">
                        Ableton Live no es solo una herramienta, es un lienzo en blanco esperando tus pinceladas musicales. Su interfaz
                        intuitiva y potentes caracteristicas te permiten experimentar y crear sin limites. Desde la produccion en 
                        tiempo real hasta la maniuplacion de audio y la sintesis, Ableton Live es la opcion preferida de los
                        profesionales de la industria musical.
                    </p>
                </div>
                
                <div className="row contact_examples_row">
                    <button type="button" className="btn btn-primary rounded-pill contact_examples_btn ">Quiero hacer el curso!</button>  
                </div>
                

            </div>
        </div>
        
        </>
    )
}


export default Home

