async function mycreation()
{
    var response=await fetch('https://fakestoreapi.com/products')
    var datas=await response.json();
    var a=''
    datas.map((i)=>{
        // a+='<dl>'
        a+='<dt>'+i.id+'</d>'
        a+='<dd>'+i.title+'</dd>'
        a+='<dd>'+i.price+'</dd>'
        a+='<dd>'+i.description+'</dd>'

    });
    document.getElementById("tab").innerHTML=a;
    
}
