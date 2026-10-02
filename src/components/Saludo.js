function Saludo (props){
    var mensaje = "hoy es viernes";
    const { nombre, edad} = props;
    return (<div> 
                <h1>Holaaa, saludo desde componentes!!!</h1>
                <h2> Segundo H!!</h2>
                <h2>Bienvenido/a {nombre} y su edad es {props.edad}</h2>
            </div>)
}

export default Saludo;