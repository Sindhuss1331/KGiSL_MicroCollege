module.exports.first_day=async function(a,b){
    
    var c=[];
        for(let i=0;i<a.length;i++){
            for(let j=0;j<b.length;j++){
                if(a[i]==b[j]){
                    c.push({
                     no:a[i]
                })
            }
        }
    }
    return c;
}