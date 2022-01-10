var crossorzero = "0";
var win = false;
function clickButton(id){
    //console.log("check");
    if(win==true){
        return;
    }
    if(crossorzero=="0"){
        crossorzero="X";
    }
    else{
        crossorzero="0";
    }
    if(id==1 && document.getElementById("1").innerText==""){
        document.getElementById("1").innerText = crossorzero;
    }
    if(id==2 && document.getElementById("2").innerText=="")
        document.getElementById("2").innerText = crossorzero;
    if(id==3 && document.getElementById("3").innerText=="")
        document.getElementById("3").innerText = crossorzero;
    if(id==4 && document.getElementById("4").innerText=="")
        document.getElementById("4").innerText = crossorzero;
    if(id==5 && document.getElementById("5").innerText=="")
        document.getElementById("5").innerText = crossorzero;
    if(id==6 && document.getElementById("6").innerText=="")
        document.getElementById("6").innerText = crossorzero;
    if(id==7 && document.getElementById("7").innerText=="")
        document.getElementById("7").innerText = crossorzero;
    if(id==8 && document.getElementById("8").innerText=="")
        document.getElementById("8").innerText = crossorzero;
    if(id==9 && document.getElementById("9").innerText=="")
        document.getElementById("9").innerText = crossorzero;
    winningLogic("1","2","3");
    winningLogic("4","5","6");
    winningLogic("7","8","9");
    winningLogic("1","4","7");
    winningLogic("2","5","8");
    winningLogic("3","6","9");
    winningLogic("1","5","9");
    winningLogic("3","5","7");
}
function winningLogic(a,b,c){
    if(document.getElementById(a).innerText=="0" && document.getElementById(b).innerText=="0" && document.getElementById(c).innerText=="0"){
        document.getElementById("win").innerText = "0 wins";
        win=true;
    }
    if(document.getElementById(a).innerText=="X" && document.getElementById(b).innerText== "X" && document.getElementById(c).innerText=="X"){
        document.getElementById("win").innerText = "X wins";
        win=true;
    }
}