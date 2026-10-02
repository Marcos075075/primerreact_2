function DobleNumero() {
    const ejecutarDoble = (numero) => {
        let doble = numero * 2;
        console.log(doble);
    }

    let mensaje = "Mensaje 1 sin cambiar"
    const cambiarMensaje = () => {
        console.log("antes del cambio: " + mensaje);
        mensaje = "Mensaje 2 CAMBIADO";
        console.log("Despues del cambio: " + mensaje);
    }

    var estilo = {
        color: "red",
        backgroundColor: "orange"
    }

    return (<div>
                <h1 style={estilo}>Metodos doble números</h1>
                <h2 style={{color: "blue"}}> {mensaje}</h2>
                <button onClick={ () => cambiarMensaje()}>Modificar mensaje</button>
                <button onClick={ () => ejecutarDoble(7)}>Doble 7</button>
                <button onClick={ () => ejecutarDoble(33)}>Doble 33</button>
                <button onClick={ () => ejecutarDoble(654)}>Doble 654</button>
            </div>)
}

export default DobleNumero;