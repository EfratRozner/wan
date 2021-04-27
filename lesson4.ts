
enum Workers{
    Managers, salesPeople, productPeople
}

enum Customers{
    Individuals, Organizations
}
interface Person{
    name:string,
    id:number,
    age:number
   
    detail():void,
    logIn():void,
}

class Employee implements Person{
    name:string;
    id:number;
    age:number;
    salary:number;
    Type:Workers;
    constructor(name:string,id:number,age:number,salary:number,Type:Workers){
        this.name=name;
        this.id=id;
        this.age=age;
        this.salary=salary;
        this.Type=Type;
    }
    logIn(){
        console.log("hello:"+this.name+"you are: "+this.Type);
    }
    detail(){
        console.log("name: "+this.name+" id: "+this.id);
    }
}

class Customer implements Person{
    name:string;
    id:number;
    age:number;
    cType:Customers;
    constructor(name:string,id:number,age:number,cType:Customers){
        this.name=name;
        this.id=id;
        this.age=age;
        this.cType=cType;
    }
    logIn(){
        console.log("hello:"+this.name+"you are: "+this.cType);
    }
    detail(){
        console.log("name: "+this.name+" id: "+this.id);
    }
}

function sendEmail(sendTo: Customer | Employee){
    if(sendTo instanceof Customer){
        console.log("send to customer")
    }
    else{
        console.log("send to employee")
    }
    
}
let e1 = new Employee("efrat",11,80,80,Workers.Managers);
let c2 = new Customer("naama",66,38,Customers.Organizations);
sendEmail(e1);
e1.logIn();
c2.logIn();
c2.detail();
