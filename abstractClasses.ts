abstract class Hayvan {
    constructor() {
        
    }
    Yuru():void{
        console.log("Yürüdü")
    }

    abstract YemekYe():void;
}

class Aslan extends Hayvan {  
    constructor() {
        super();       
    }

    YemekYe(): void {
       console.log("Et yedi")
    }
}

class Ceylan extends Hayvan {  
    constructor() {
        super();       
    }

    YemekYe(): void {
       console.log("Ot yedi")
    }

    baskaBirOperasyon(){

    }
}

let aslan = new Aslan()
aslan.YemekYe();
aslan.Yuru();

let ceylan = new Ceylan();
ceylan.YemekYe();
ceylan.Yuru();

let hayvan : Hayvan
hayvan = new Aslan()

hayvan = new Ceylan()