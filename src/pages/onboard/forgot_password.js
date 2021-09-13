import React, { Component } from 'react'
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import Button from '../../components/button'
import InputField from '../../components/inputField'


import styles from "../../styles/onboard/forgot_pass.module.scss";

class ForgotPassword extends Component{    
    

    render(){
        return(
            <div>
                <section className={styles.forgot_p}>
                    <div className={styles.wrapper}>
                        <div className={styles.head}>
                            <h2>Forgot Password</h2>
                        </div>

                        <div className={styles.form}>
                            <InputField type="email" name="email" ilabel="Email" placeholder="Johndoe@invitehd.com" />
                            <Button text="Submit" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
     

export default ForgotPassword