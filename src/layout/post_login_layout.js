import React, {Component} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

class PostLoginLayout extends Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar />
                    <div className="content-container">
                        <Sidebar />
                        <>{this.props.children}</>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostLoginLayout