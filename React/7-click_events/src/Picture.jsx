

function Picture(){

    const imgUrl = "./src/assets/react.svg";

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return(
        <div>
            <img src={imgUrl} alt="React logo" onClick={(e)=>{handleClick(e)}}/>
        </div>
    );
}

export default Picture