import React, { Component } from 'react';
import logo from './eklogo.png';
import pena from './pena.png';
import mavi from './mavi.png';
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <form>
                <img src={logo} alt="logo"/>
                <nav className="entry"> 
                <input type="text" placeholder="başlık, #entry, @yazar"/>
                <button type="submit">Ara..</button>
                </nav>
                <nav>
                <p className="hh">kayıt ol</p>
                <p className="hh">giriş</p>
                </nav>
                </form>
            <nav className="under">
                <ul className="list">
                    <li>gündem</li>
                    <li>debe</li>
                    <li>sorunsallar</li>
                    <li>#spor</li>
                    <li>#ilişkiler</li>
                    <li>#siyaset</li>
                    <li className="nokta">...</li>
                </ul>
                <nav className="pe">
                <img src={pena} alt="pena"  className="iconimg"/>
                <a  className="icon">Pena</a>
                <img src={mavi} alt="pena"  className="iconimg"/>
                <a  className="icon">Ekşi Şeyler</a>
                </nav>

                  {/*   <a className="icon"> <img src={mavi} alt="pena"  className="iconimg"/>ekşi şeyler</a>
                    <a className="icon"> <img src={pena} alt="pena" className="iconimg"/>pena</a> */}
            </nav>
            </div>
        )
    }
}


