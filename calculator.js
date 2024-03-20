function clearvalue()
{
document.getElementById("inputfield").value=" ";
}
function inputNumber(val)
{
    document.getElementById("inputfield").value +=val;
}
function finalResult()
{
    try{
   let x=document.getElementById("inputfield").value;
   let y = eval(x);
   document.getElementById("inputfield").value= y; }
catch{
    let x="error"
    document.getElementById("inputfield").innerHTML=x;
}
}