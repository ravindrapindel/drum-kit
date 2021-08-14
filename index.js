var numberOfButton = document.querySelectorAll(".drum").length;
for( var i = 0 ; i< numberOfButton ;i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    buttonAnimation(buttonInnerHtml);
    switch (buttonInnerHtml) {
      case "w":
      var crash = new Audio('crash.mp3');
      crash.play();
        break;
        case "a":
        var kickBass = new Audio('kick-bass.mp3');
        kickBass.play();
          break;
          case "s":
          var snare = new Audio('snare.mp3');
          snare.play();
            break;
            case "d":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
              break;
              case "j":
              var tom2 = new Audio('tom-2.mp3');
              tom2.play();
                break;
                case "k":
                var tom3 = new Audio('tom-3.mp3');
                tom3.play();
                  break;
                  case "l":
                  var tom4 = new Audio('tom-4.mp3');
                  tom4.play();
                    break;

      default:
      console.log("Something wrong !!");


    }
  }
)
}

document.addEventListener("keypress", function (event) {
   // var buttonInnerHtml = "event";
     buttonAnimation(event.key);
   switch (event.key) {
     case "w":
     var crash = new Audio('crash.mp3');
     crash.play();
       break;
       case "a":
       var kickBass = new Audio('kick-bass.mp3');
       kickBass.play();
         break;
         case "s":
         var snare = new Audio('snare.mp3');
         snare.play();
           break;
           case "d":
           var tom1 = new Audio('tom-1.mp3');
           tom1.play();
             break;
             case "j":
             var tom2 = new Audio('tom-2.mp3');
             tom2.play();
               break;
               case "k":
               var tom3 = new Audio('tom-3.mp3');
               tom3.play();
                 break;
                 case "l":
                 var tom4 = new Audio('tom-4.mp3');
                 tom4.play();
                   break;

     default:
     console.log("Something wrong !!");


   }
 }
)
 function   buttonAnimation(currentKey){
   document.querySelector("."+currentKey).classList.add("pressed");
   setTimeout(function(){ document.querySelector("."+currentKey).classList.remove("pressed"); }, 100);
 }
// function handleClick(){
//
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// }
