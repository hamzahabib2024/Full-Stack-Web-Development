import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Hamza Habib");
    }


    return (

        <div>
        
            <p>Name : {name}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    );
}

export default MyComponent