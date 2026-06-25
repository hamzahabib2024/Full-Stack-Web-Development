function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-message"> Wellcome {props.username}</h2>
    }
    else{
        return <h2 className="login-prompt"> Please log in!</h2>
    }
}
export default UserGreeting