import React, { Component } from 'react'
import { url } from '../adapter/common'
import { Link } from 'react-router-dom'

import img from '../assets/svg/fi-br-bell-ring 1.svg';
import user from '../assets/svg/Ellipse.svg';

import styles from './styles/navbar.module.scss'

class Navbar extends Component{    
    
  

    render(){
        return(
            <div>
                <nav className={styles.navbar}>
                   <div className={styles.userI}>
                        <span className={styles.noti}>
                            <img src={img} alt="" />
                        </span>

                        <span className={styles.avatar}>
                            <img src={user} alt="" />
                        </span>
                   </div> 
                </nav>
            </div>
        )
    }
}
     

export default Navbar