import { useState } from "react";


function Login(props) {
    const [userDetails,setuserDetails]= useState({
        email:'',
        password:''
    })
    const Login=(event)=>{
        console.log(event);
        event.preventDefault()
        console.log(userDetails);
        if(userDetails.email&&userDetails.password){
            //programatically navigate
            console.log('props',props);
            props.history.push('/home')
        }
    }
    const handleEmailChange=(event)=>{
        console.log(event);
        console.log('name', event.target.name);
        console.log('value', event.target.value);
        //1.take a copy of the state
        const userDetailsCopy={...userDetails}
        userDetailsCopy.email=event.target.value
        setuserDetails(userDetailsCopy)
    }
    const handlePasswordChange=(event)=>{
        //1.take a copy of the state
        const userDetailsCopy={...userDetails}
        userDetailsCopy.password=event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div>
            <form onSubmit={Login}>
            <div>
                <input type='email' name="email" placeholder="Enter email"
                onChange={(event)=>{
                    handleEmailChange(event)
                }}
                value={userDetails.email}/>
            </div>
            <div>
                <input type='password' name="password" placeholder="Enter password"
                onChange={(event)=>{
                    handlePasswordChange(event)
                }}
                value={userDetails.password}/>
            </div>
            <div>
           <input type='submit' value='login'/>
           </div>
           </form>
        </div>
    )
}

export default Login
