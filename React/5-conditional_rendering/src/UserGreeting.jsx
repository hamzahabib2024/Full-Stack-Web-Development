// import PropTypes from "prop-types";

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2 className="welcome-message"> Wellcome {props.username}</h2>
    // }
    // else{
    //     return <h2 className="login-prompt"> Please log in!</h2>
    // }


    // using ternary operator:

    const welcomeMessage = <h2 className="welcome-message"> Wellcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt"> Please log in!</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

// UserGreeting.propTypes = {
//     isLoggedIn: PropTypes.bool,
//     username: PropTypes.string,
// };

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};

export default UserGreeting