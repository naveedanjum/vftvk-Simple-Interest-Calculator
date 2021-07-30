function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateAmount(){
    var principal = document.getElementById("principal").value;
    if ( principal=="" || parseFloat(principal) <= 0) {
        alert("You can not enter negative number");
        document.getElementById("principal").value = null;
        principal.focus();
        return false;
    }
    return true;
}

function compute()
{
    var is_valid = validateAmount();
    if (is_valid){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var totalAmount = parseFloat(principal) + interest;
    
        message = "If you deposit <b>"+principal +"</b>,<br/>At an interest rate of <b>"+rate+"%.</b>,<br/>"
        message += "You will receive an amount of <b>"+totalAmount+"</b>,<br/>In the year "+year
        var elResult = document.getElementById("result");
        elResult.innerHTML = message;
    }
    

}


        