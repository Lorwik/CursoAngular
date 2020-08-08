(()=>{

    class Avenger {

        //nombre: string;
        //equipo: string;
        //nombreReal: string;
        //puedePelear: boolean;
        //peleasGanadas: number;

        constructor(public nombre: string, 
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear?: boolean,
                    public peleasGanadas: number = 0){
            
        }

    }

    const antman = new Avenger("Antman", "Capi");

    console.log(antman);

})();



