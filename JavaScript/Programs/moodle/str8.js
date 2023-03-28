const str='js string exercises';
const arr=str.split("");
const temp=0;
for(var i=0;i,i=arr.length;i++){
    arr[i] = arr[i].charAt(temp).toUpperCase()+arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);
