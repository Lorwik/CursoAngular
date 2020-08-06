(function(){

    //Funcion Normal
    const miFuncion = function ( a: string){
        return a.toUpperCase;
    }

    //Funcion de Flecha
    const miFuncionF = (a : string ) => a.toUpperCase;

    //Funcion Normal
    const sumarN = function (a:number, b:number){
        return a + b;
    }

    //Funcion de Flecha
    const sumarF = (a:number, b:number) => a + b;

    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout(() => {

                console.log(`${this.nombre} smash!!!`);

            }, 1000);

        }
    }

    hulk.smash();

})();



