(function(){

    function activar(quien: string,
                     momento?: string,
                     objeto:string = 'batiseñal') {

        if (momento) {
            console.log(`${quien} activo la ${ objeto } en la ${momento}.`);
        } else {
            console.log(`${quien} activo la ${ objeto }`);
        }
    }

    activar('Gordon', 'tarde');


})();



