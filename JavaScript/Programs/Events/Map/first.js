async function mapfunction()
{
    var response = await fetch("https://fakestoreapi.com/products");
    var datas = await response.json()
   var a='<tr><th>Title</th><th>ID</th><th>price</th></tr>'
   datas.map((j) =>{
    a += '<tr>'
    a += '<td>' + j.id +'</td>'
    a += '<td>' + j.title + '</td>'
    a += '<td>' + j.price +'</td>'
    a += '</tr>'    
   });
   document.getElementById("lil").innerHTML = a;
}