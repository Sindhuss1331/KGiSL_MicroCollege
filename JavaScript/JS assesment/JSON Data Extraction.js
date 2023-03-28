async function extraction()
{
    
    var extract=await fetch('https://fakestoreapi.com/products/');
    var data=await extract.json();
    var cmds = '';
    data.map((i,index)=>{
        cmds += '<div class="card" style="width: 18rem;"><img src="'+ i.image +'" class="card-img-top" alt="...">';
        cmds += '<div class="card-body"><h5 class="card-title">' + i.title + '</h5><p class="card-text">' + i.description + '</p>';
        cmds += '</div><ul class="list-group list-group-flush"><li class="list-group-item"><b>Price : ' + i.price + '</b></li>'
        cmds += '<li class="list-group-item">' + i.category + '</li><li class="list-group-item">'+i.rating.rate+'</li></ul></div>'
    });
   
    document.getElementById("Main_Div").innerHTML = cmds;

}


  
  
    
  
  
    
    
    


