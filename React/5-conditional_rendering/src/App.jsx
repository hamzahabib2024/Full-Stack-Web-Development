// conditional rendering:
      // it allows us to control what gets rendered on the screen based on certain conditions. 
      // (show, hide, or change component/content based on specific criteria)

import UserGreeting from "./UserGreeting";
function App(){

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Hamza Habib" />
      {/* <UserGreeting /> */}
    </>
  );
}
export default App