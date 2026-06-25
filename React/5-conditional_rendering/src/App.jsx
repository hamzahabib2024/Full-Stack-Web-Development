import UserGreeting from "./UserGreeting";
function App(){

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Hamza Habib" />
    </>
  );
}
export default App