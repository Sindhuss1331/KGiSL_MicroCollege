var employee ={
    ename:"Sowndarya",
    developer:function(){
        console.log("Java developer");
    },
    skills:["HTML5","CSS3","JavaScript","Java","MySQL&MongoDB"],
    salary:{
            DA:20000,
            pf:2000,
            netpay:150000
    }
}
//console.log(employee.developer());
console.log(employee.skills[2]);
console.log(employee.skills[4]);
console.log(employee.skills);
console.log(employee.salary);
console.log(employee.salary.netpay);