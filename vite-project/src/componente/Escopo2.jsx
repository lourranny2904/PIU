import "./Escopo.css"

function Escopo2(){
    const label = "Clique Aqui"
    return(
        <>
      
        <div>
            <button onClick={() => console.log("tu cheira?")}>{label}</button>
        </div>
        </>
    )
}

export default Escopo2