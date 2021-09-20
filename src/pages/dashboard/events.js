import React, {Component} from "react";

import PostLoginLayout from "../../layout/post_login_layout";

// import sally from '../../assets/svg/Saly-2.svg';

import styles from "../../styles/dashboard/events.module.scss";

class Events extends Component{
   
    render(){
        return(
            <PostLoginLayout>
                <div className="content">
                    <div className={styles.wrapper}>
                        <span className={styles.welcome}>
                                event dashboard
                        </span>                       
                    </div>
                </div>
            </PostLoginLayout>
        );
    }
}

export default Events;