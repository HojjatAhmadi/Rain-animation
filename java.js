const rain_container = document.querySelector('#rain-container');
const window_width = window.innerWidth;

function rain_aniamtion(){
  var left = Math.floor(Math.random()*window_width);
  var height = Math.floor(Math.random()*10);
  var animation_time = Math.floor(Math.random()*5);
  const rain = document.createElement('div');
  rain.id = 'rain';
  rain.style.left = left+"px";
  rain.style.height = height+"px";
  rain.style.animation = "rain-animation "+animation_time+"s 1 forwards";
  rain_container.appendChild(rain);

  setTimeout(DistroyRain , (animation_time*1000) , rain)
}

setInterval(rain_aniamtion , 100)


function DistroyRain(element) {
  element.remove()
}
