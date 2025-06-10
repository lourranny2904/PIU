function Card ({nome, arquivo, onClick}) {

    return (
        <div onClick = {onClick}>
            <img src = {arquivo}></img>
            <h3>{nome}</h3>
        </div>
    )

}

export default Card