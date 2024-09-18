class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`name = ${this.name}`);
        console.log(`email = ${this.email}`)
    }
}


let sammy = new User("Sammy", "samk@gmail.com");
let suu = new User("Suu", "suu@gmail.com");


class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        let edata = "new Data"
    }
}




let admin1 = new Admin("Dukkar", "dk@gmail.com");




