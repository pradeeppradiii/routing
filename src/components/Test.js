import React from "react";
import { withRouter } from 'react-router-dom'



function Test(props) {
    console.log('Test props',props);
    const navigateTologin=()=>{
        props.history.push('/login')
    }
    return (
        <div>
            Test Components
            <button onClick={()=>{
                navigateTologin()
            }}>Login</button>
        </div>
    )
}

export default withRouter(Test)
