

function Button() {

    const handleClick = () => {
        window.alert("ouch! You clicked me!");
    };

    const handleClick2 = (name) => {
        window.alert(` ${name} ouch! Stop clicking me!`);
    };

    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            window.alert(`${name} you clicked me ${count + 1} times!`);
            count++;
        }
        else {
            window.alert(` ${name} ouch! Stop clicking me!`);
        }
    };

    const handleClick4 = (e) => {
        e.target.textContent = "Ouch! You clicked me!";
    };

    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => handleClick2("hamza")}>Click me, hamza!</button>
            <button onClick={() => handleClick3("haider")}>Click me, haider!</button>
            <button onClick={(e) => handleClick4(e)}>click me!</button>
            <button onDoubleClick={(e) => handleClick4(e)}>click me!</button>
        </>
    );
}

export default Button