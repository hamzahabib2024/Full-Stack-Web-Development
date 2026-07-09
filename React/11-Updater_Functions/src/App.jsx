// Updater Function:
                  // it is a function in react that is passed as argument to setState() usually.
                  // for example: setYear(Year + 1)
                  // this allow for safe updates based on the previous state.
                  // it is used with multiple state updates and asynchronous functions.
                  // it is good practice to use updater function when ever possible.


import MyComponent from "./MyComponent.jsx"

function App() {

  return (
    <>
      <MyComponent/>
    </>
  );
}

export default App