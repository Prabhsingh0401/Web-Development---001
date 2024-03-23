import React from 'react'
import Loader from 'react-loaders'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom' 
import './index.scss'
/*import MYCV from "../../assets/Prableen Singh Resume.pdf"*/
import {useState} from 'react'
/*import FileSaver from 'file-saver'*/

const Home = () => {

    const [letterClass]=useState('text-animate-hover')

    /*const saveFile = [
        FileSaver.saveAs(
          process.env.REACT_APP_CLIENT_URL + "../../assets/Prableen Singh Resume.pdf",
          "Prableen Singh Resume.pdf"
     )];*/

    return(
        <div className='Main'>
        <div className="container home-page">
            <div className="text-zone">
                <h1 className='Home'>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>

                    <br></br>

                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'</span>
                    <span className={letterClass}>m</span>
                    ‎ ‎ 
                <img src={LogoTitle} alt='Developer'></img>
                ‎ ‎ ‎
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                <br></br>
                    <span className={letterClass}>W</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>b</span>
                    ‎ ‎
                    <span className={letterClass}>D</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>v</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>p</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>r</span>
                </h1>
                <br></br>
                <h2>
                    Front-end Developer <br></br> Photographer and Editor
                </h2>
                <br></br>
                <Link className='flat-button' to="/contact">Contact Me</Link>
                <br></br> <br></br> <br></br>
                <Link className='flat-button2' to="" onClick={""}> Download CV </Link>
                </div>
            <Logo></Logo>
        </div>
        <Loader type='pacman'></Loader>
        </div>
    )
}
export default Home