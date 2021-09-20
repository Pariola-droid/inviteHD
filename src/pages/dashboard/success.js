import React, {Component} from "react";

import PostLoginLayout from "../../layout/post_login_layout";

import sallysuccess from '../../assets/svg/Saly-22.svg';
import Dbtn from '../../components/Button';

import styles from "../../styles/dashboard/success.module.scss";

class Success extends Component{
    eventBTN(){
        this.props.history.push('/dashboard/event-dashboard')
    }
   
    render(){
        return(
            <PostLoginLayout>
                <div className="content">
                    <div className={styles.wrapper}>
                        <div className={styles.success}>
                            <img src={sallysuccess} alt="" />
                            <h2>
                                event created successfully!
                            </h2>
                            <div className={styles.sbtn}>
                                <Dbtn text="go to event dashboard" onClick={() => this.eventBTN()} />
                            </div>
                        </div>
                    </div>   
                </div>
            </PostLoginLayout>
        );
    }
}

export default Success;