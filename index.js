var randomNumber1=Math.floor(Math.random() *6 ) + 1;    //generates no;s between 1to 6
var randomDiceImage="Dice"+randomNumber1+ ".png";   // generates links for the dice images   dice1.png  ----  dice6.png
var randomImageSource=randomDiceImage;    //complete link
var image1=document.querySelectorAll("img")[0];     //gives us an array of size 2  having index 0 and 1
image1.setAttribute("src",randomImageSource);       //sets the attribute ( changes the link randomly)



var randomNumber2=Math.floor(Math.random() *6 ) + 1;    //generates no;s between 1to 6
var randomDiceImage2="Dice"+randomNumber2+ ".png";   // generates dice1.png  ----  dice6.png
var randomImageSource2=randomDiceImage2;    //complete link
var image2=document.querySelectorAll("img")[1];     //gives us an array of size 2  having index 0 and 1
image2.setAttribute("src",randomImageSource2);       //sets the attribute ( changes the link randomly)

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player-1 wins";
}
else
if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML=" Player-2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML=" It's a Draw😐";
}