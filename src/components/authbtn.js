import React, {Component} from 'react'
import styles from './styles/authbtn.module.scss'

class AuthButton extends Component{

    render(){
        return(
            <>
                <button className={styles.button} onClick={this.props.onClick}>
                    {   
                        this.props.isLoading === true
                        ?
                        <div className={styles.loader}></div>
                        :
                        <span>
                            <img src={this.props.icon} className={styles.aLogo} alt="authIcon" />
                            <p>{this.props.text}</p>
                        </span>
                    }
                </button>
            </>
        )
    }
}

export default AuthButton;