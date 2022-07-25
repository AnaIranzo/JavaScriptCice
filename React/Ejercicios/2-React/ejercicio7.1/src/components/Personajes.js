function Personajes({personaje}) {
    <div className="card">
        <div className="container">
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name}/>
        </div>
    </div>
}

export default Personajes