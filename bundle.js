(()=>{const e=document.getElementById("button"),t=document.querySelector(".button2"),n=document.querySelector(".section__results");class a{constructor(){}async fetchInfo(){let e=document.getElementById("text");const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.value}&appid=498f85b6371fd0085d2ad9c9787077ce`),a=await t.json();if(console.log(a),200!==a.cod){const e=document.createElement("div");e.innerHTML="\n        <div>\n            <h2> Please, enter a valid name </h2>\n        </div>",n.appendChild(e)}else this.showData(a)}showData(e){const t=Math.trunc(e.main.temp-273),a=document.createElement("div");a.innerHTML=`\n        <div>\n            <h3 class="data--name">${e.name}, ${e.sys.country}</h3>\n            <div class= "data--temp">\n                <p class="temp--number">${t}  <span class="temp--unit">o</span></p>\n            </div>\n            <img class="weather-image" src="http://openweathermap.org/img/w/${e.weather[0].icon}.png" alt="partly_cloudy">\n            <p class="data--info">${e.weather[0].description}<br> \n            Humidity: ${e.main.humidity}</p>\n        </div>`,a.classList.add("results--container"),n.appendChild(a)}}e.onclick=()=>{(new a).fetchInfo()},t.onclick=()=>{n.textContent=""}})();