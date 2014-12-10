//REFERENCE://
//Calculator adapted from//
// http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml//
// free for commercial and noncommercial use.//


 var cake_prices = new Array();
 cake_prices["Round6"]=103;
 cake_prices["Round8"]=146;
 cake_prices["Round10"]=76;



 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Lemon"]=41;
 filling_prices["Custard"]=26;
 filling_prices["Fudge"]=23;
 filling_prices["Mocha"]=16;
 filling_prices["Raspberry"]=13;
 filling_prices["Pineapple"]=9;



function getCakeSizePrice()
{
    var cakeSizePrice=0;

    var theForm = document.forms["cakeform"];

    var selectedCake = theForm.elements["selectedcake"];

    for(var i = 0; i < selectedCake.length; i++)
    {

        if(selectedCake[i].checked)
        {

            cakeSizePrice = cake_prices[selectedCake[i].value];

            break;
        }
    }

    return cakeSizePrice;
}


function getFillingPrice()
{
    var cakeFillingPrice=0;

    var theForm = document.forms["cakeform"];

     var selectedFilling = theForm.elements["filling"];


    cakeFillingPrice = filling_prices[selectedFilling.value];

    return cakeFillingPrice;
}

function candlesPrice()
{
    var candlePrice=0;

    var theForm = document.forms["cakeform"];

    var includeCandles = theForm.elements["includecandles"];

    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    return candlePrice;
}

function insciptionPrice()
{

    var inscriptionPrice=0;

    var theForm = document.forms["cakeform"];

    var includeInscription = theForm.elements["includeinscription"];

    if(includeInscription.checked==true){
        inscriptionPrice=10;
    }

    return inscriptionPrice;
}

function calculateTotal()
{

    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();


    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price for order $"+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
