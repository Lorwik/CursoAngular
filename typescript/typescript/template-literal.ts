(function(){

    function getEdad() {
        return 100 + 100 + 300;
    }

    const nombre     = 'Manuel';
    const apellido   = "Sandalio"
    const edad       = 27;

    //const salida = nombre + " " + apellido + " ( " + edad + " )";
    const salida = `${nombre} \n${apellido} \n( ${getEdad()} ) `;

    console.log(salida);

})();



