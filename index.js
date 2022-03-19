let displayScreen =  document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = " ";


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
            document.location.reload();
        }
        else if(buttonText == '='){
            displayScreen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            displayScreen.value=screenValue;
        }

        // randomize();


    });
}

// function randomize(){
//     //var buttons = buttons;

//     // shuffle(buttons);
//     var hel = 69;
//     for(var i = 0 ; i < buttons.length ; i++){
//         document.querySelectorAll("button")[i].innerHTML = hel;
//     }
// }

function vanshmode(){
    var nums = document.querySelectorAll(".nums");
    for(i of nums){
        i.innerHTML = "69";
    }
    var audio = new Audio("sounds/Vm.mp3");
    audio.play();
}