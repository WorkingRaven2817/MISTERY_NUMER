var y = Math.floor(Math.random() * 10+1);  

var x = document.getElementById("guessField").value;
if(x==y)
{
    alert("felicidades"+playername+"lo adivinaste bien"+guess+"intento");
    guess=1
}
else if(x>y)
{
    guess++;
    alert("ups lo siento intenta un numero mas pequeño");
}
else
{
    guess++;
    alert("ups lo siento intenta un numero mas grande");
}
function playAgain(){
    y=Math.floor(Math.random() * 10+1);
}