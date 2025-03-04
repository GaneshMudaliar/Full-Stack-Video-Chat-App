import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'


const LandingPage = () => {

  const navigate = useNavigate();



  return (
    <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2> Video Call</h2>
                </div>
                <div className='navlist'>
                    <p 
                    onClick={() => {
                        navigate("/aljk23")
                    }}
                    >Join as Guest</p>
                    <p 
                    onClick={() => {
                        navigate("/auth")

                    }}
                    >Register</p>
                    <div 
                    onClick={() => {
                        navigate("/auth")

                    }} 
                    role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    {/* <img src="/mobile.png" alt="" /> */}

                </div>
            </div>



        </div>
  )
}

export default LandingPage;