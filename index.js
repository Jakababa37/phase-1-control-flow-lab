function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me'
  } else if (distance >2000 && distance < 2500) {
    return 'I would gladly take your thirty bucks'
  } else if (distance > 2500){
    return 'No can do'
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else {
    return 'No go'
  }
  city === 'NYC' ? 'Ok, sounds good' : 'No go'
  
}

function switchOnCharmFromTip(tipString){
  if (tipString === 'generous'){
    return 'Thank you so much.'
  }else if (tipString === 'not as generoud'){
    return 'Thank you'
  }else if (tipString === 'thanks for everything'){
    return 'Bye'
  }
}