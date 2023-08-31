import "./styles.css";

const showMood =  document.querySelector("#showMood");


showMood.addEventListener('click', function(event) {
  event.preventDefault();
  const moodInput = document.querySelector("[name=mood]:checked");
  const myMood = document.querySelector("#myMood");
  const moodValue = moodInput.value;
  myMood.innerHTML = moodValue;
  const classes = myMood.classList;
  classes.toggle('default-mood');
  switch(moodValue){
    case "Off the charts Happy" :
      classes.toggle('off-the-charts');;
      break
    case "Kinda mehh" :
      classes.toggle('kinda-mehh');
      break
    case "On the struggle bus" :
        classes.toggle('on-the-bus');
      break
    default:
      console.log("It's a switch")
  }


})

