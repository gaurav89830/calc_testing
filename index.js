let displayScreen =  document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = " ";
var ifvanshmode = false;
var ifrandom = false;

for(i of buttons){
    i.addEventListener('click',function (e){
        buttonText = e.target.innerHTML;
        console.log(buttonText);

        if(buttonText == 'Vm'){
            vanshmode();
        }
        else if(buttonText == 'X'){
            buttonText = '*';
            screenValue+=buttonText;
            displayScreen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue="";
            displayScreen.value = screenValue;
            // document.location.reload();
        }
        else if(buttonText == '='){
            if(screenValue==80085){
                displayScreen.value = "😏";
            }
            else
            displayScreen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            displayScreen.value=screenValue;
        }

        if(ifrandom)
        randomize();

        // thanos();

    });
}

function randomize(){
    document.getElementsByClassName("vm")[0].style.border="1px";
    document.getElementsByClassName("rd")[0].style.border="1px solid blue";

    const array = ['(',')','C','%','.','X','+','-','/','=','0','1','2','3','4','5','6','7','8','9'];
    array.sort((a, b) => 0.5 - Math.random());
    for(var i = 0 ; i < array.length ; i++){
        document.querySelectorAll(".randomize")[i].innerHTML = array[i];
    }
    ifrandom=true;
}

function onclick_random(){
    if(ifrandom == true)
    document.location.reload();
    else
    randomize();
}

function vanshmode(){
    document.getElementsByClassName("vm")[0].style.border="1px solid blue";
    document.getElementsByClassName("rd")[0].style.border="1px";



    var nums = document.querySelectorAll(".nums");
    for(i of nums){
        i.innerHTML = "69";
    }
    // var audio = new Audio("sounds/Vm.mp3");
    // if(ifrandom==false)
    // audio.play();
    ifvanshmode = true;
}

function onclick_vanshmode(){
    if(ifvanshmode==true){
        document.location.reload();
    }
    else
    vanshmode();
}



//under testing


function thanos(){


    document.querySelectorAll(".randomize")[10].style.opacity=i;
    document.querySelectorAll(".randomize")[10].style.display="none";
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


