import profile from "./assets/profile.jpg";
function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profile} alt="Profile Picture"></img>
            <h2 className="card-title">Hamza Habib</h2>
            <p className="card-text">I am student of Artificial Intelligence and currently i am learning react</p>
        </div>
    );
}

export default Card