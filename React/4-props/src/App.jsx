// Props: 
//       - Props are read-only properties that are shared between components in React. 
//       - They allow you to pass data from a parent component to a child component, enabling dynamic rendering and reusability of components.
//       - Props are immutable, meaning that they cannot be modified by the child component that receives them. Instead, they are passed down from the parent component and can be used to customize the behavior and appearance of the child component.

//    <component key="value" />


import Student from "./Student.jsx";


function App(){
  return(
    <>
      <Student name="Hamza Habib" age = {20} isStudent={false} />
      <Student name="Haider Habib" age = {17} isStudent={true} />
      <Student name="Hassan Habib" age = {13} isStudent={true} />
      <Student name="Umar Habib" age = {14} isStudent={true} />
      <Student name="hh"/>
    </>
  );
}
export default App