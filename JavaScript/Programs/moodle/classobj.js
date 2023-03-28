class Person{
       constructor(name,age)
       {
        this.name;
        this.age;
       }
       discribe =()=>{return (this.name + ", " + this.age + " years old.")}
    }
    var john = new Person("John",19);
    console.log(john.discribe());
    var sindhu = new Person("Sindhu",23);
    console.log(sindhu.discribe());

