import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Hamza Habib");
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const updateEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }


    return (

        <div>
        
            <p>Name : {name}</p>
            <button onClick={updateName}>Change Name</button>
            <p>Age : {age}</p>
            <button onClick={updateAge}>Increment Age</button>
            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmploymentStatus}>Toggle Employment Status</button>
        </div>
    );
}

export default MyComponent