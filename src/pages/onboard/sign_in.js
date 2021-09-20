import React, { Component } from 'react'
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import AuthButton from '../../components/AuthButton'
import Button from '../../components/Button'
import InputField from '../../components/InputField'

import fb from "../../assets/svg/facebook 1.svg";
import google from "../../assets/svg/search 1.svg";

import styles from "../../styles/onboard/sign_in.module.scss";

class SignIn extends Component{    
    
    dashBTN(){
        this.props.history.push('/dashboard/home')
    }

    render(){
        return(
            <div>
                <section className={styles.sign_in}>
                    <div className={styles.wrapper}>
                        <div className={styles.head}>
                            <h2>Login to InviteHD</h2>
                        </div>

                        <div className={styles.form}>
                            <InputField type="email" name="email" ilabel="E-mail" placeholder="Email address" />
                            <InputField type="password" name="password" ilabel="Password" placeholder="Type your password" />
                            <div className={styles.nb}>
                                <span>
                                    <input type="checkbox"/>
                                    Remind me
                                </span>

                                <Link to={url.forgotP}>
                                    Forgot your Password?
                                </Link>
                            </div>

                            <div className={styles.nb2}>
                                <span>                                    
                                    <Link to={url.signUp}>Create a new account!</Link>
                                </span>
                            </div>

                            <Button text="Log In" onClick={() => this.dashBTN()} />
                            <div className={styles.or}>
                                <span>or</span>
                            </div>
                            <div className={styles.auth}>
                                <AuthButton icon={google} text="Login with Google" />
                                <AuthButton icon={fb} text="Login with Facebook" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
     

export default SignIn