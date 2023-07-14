var a = 5;
function display()
{
    
    console.log("within a function "+a);
}
display();
console.log("Outside of the function"+a);

for(let i =1;i<=10;i++)
{   
    console.log(i+"*"+a+"=",(i*a));
}