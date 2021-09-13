import React, { Component } from 'react'
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import AuthButton from '../../components/authbtn'
import Button from '../../components/button'
import InputField from '../../components/inputField'

import fb from "../../assets/svg/facebook 1.svg";
import google from "../../assets/svg/search 1.svg";

import styles from "../../styles/onboard/sign_up.module.scss";

class SignUp extends Component{    
    

    render(){
        return(
            <div>
                <section className={styles.sign_up}>
                    <div className={styles.wrapper}>
                        <div className={styles.head}>
                            <h2>Signup to join InviteHD</h2>
                        </div>

                        <div className={styles.form}>
                            <InputField type="text" name="fullname" ilabel="E-mail/Username" placeholder="Full name" />
                            <InputField type="text" name="username" ilabel="Username" placeholder="Unique name" />
                            <InputField type="email" name="email" ilabel="Email" placeholder="Johndoe@invitehd.com" />
                            <InputField type="password" name="password" ilabel="Password" placeholder="Type your password" />
                            <InputField type="password" name="password" ilabel="Confirm Password" placeholder="Type your password" />
                            <div className={styles.nb}>
                                <span>
                                    <input type="checkbox"/>
                                    I agree to all&nbsp;<a href="#">Terms</a>&nbsp;and &nbsp;<a href="#">Conditions</a>
                                </span>
                            </div>
                            <Button text="Sign Up" />
                            <div className={styles.or}>
                                <span>or</span>
                            </div>
                            <div className={styles.auth}>
                                <AuthButton icon={google} text="Signup with Google" />
                                <AuthButton icon={fb} text="Signup with Facebook" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
     

export default SignUp