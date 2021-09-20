import React, {Component} from "react";

import PostLoginLayout from "../../layout/post_login_layout";

import sally from '../../assets/svg/Saly-2.svg';

import styles from "../../styles/dashboard/dashboard.module.scss";

class Dashboard extends Component{
   
    render(){
        return(
            <PostLoginLayout>
                <div className="content">
                    <div className={styles.wrapper}>
                        <span className={styles.welcome}>
                                welcome jess!
                        </span>

                        <div className={styles.banner}>
                            <span className={styles.bubbles}>
                            </span>
                            
                            <div className={styles.text}>
                                <h2>Create your Event!</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>

                                <button>
                                    Get started!
                                </button>
                            </div>

                            <div className={styles.sally}>
                                <img src={sally} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </PostLoginLayout>
        );
    }
}

export default Dashboard;