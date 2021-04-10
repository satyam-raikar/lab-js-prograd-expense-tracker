//getting the list element
var $hst=document.getElementById("list");

//getting the income element
var $inc=document.getElementById("money-plus");

//getting the expense element
var $exp=document.getElementById("money-minus");

//getting the balance element
var $bal=document.getElementById("balance");

//getting button addtransaction
var $btn=document.getElementsByClassName("btn")[0];

//Initializing 3 varialble for Income,Expense and balance
var prev_inc=0;
var prev_exp=0;
var prev_bal=0;

$btn.addEventListener("click",function(event){
    event.preventDefault();
    //getting the values entered in the text box
    var ky=document.getElementById("text").value;
    //getting the transaction history element
    var val=Number(document.getElementById("amount").value);
    //storing key value in local storage
    localStorage.setItem(ky,val);
    //changing income and expense
    if(val>0){
        var $li=document.createElement("li");
        $li.textContent=ky +" "+ val;
        $hst.appendChild($li);
        $li.classList.add("plus")
        prev_inc+=val;
        prev_bal+=val;
        $inc.innerHTML=`$ ${prev_inc}`
        $bal.innerHTML=`$ ${prev_bal}`
        }
    else if(val<0){
        var $li=document.createElement("li");
        $li.textContent=ky +" "+ val;
        $hst.appendChild($li);
        $li.classList.add("minus")
        prev_exp+=val;
        prev_bal+=val;
        $exp.innerHTML=`$ ${Math.abs(prev_exp)}`
        $bal.innerHTML=`$ ${prev_bal}`
        }
    })