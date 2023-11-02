setInterval(()=>{

    let din = document.querySelector(".days")
    let ghantay = document.querySelector(".hour")
    let minut = document.querySelector(".minute")
    let second = document.querySelector(".second")
    let nowdate = new Date()
    let milliseconds = nowdate.getTime()
let setdate = new Date("1-1-2024")
let setmilliseconds = setdate.getTime()
let difmilliseconds = setmilliseconds - milliseconds
let difofdays =Math.floor(difmilliseconds/(1000*60*60*24))
let leftoverdays = (difmilliseconds/(1000*60*60*24)) - Math.floor(difmilliseconds/(1000*60*60*24))
let difofhour = Math.floor(leftoverdays*24)
let leftoverofhour = (leftoverdays*24) - Math.floor(leftoverdays*24) 
let difofminutes = Math.floor(leftoverofhour*60)
let leftoverofminutes = (leftoverofhour*60) - Math.floor(leftoverofhour*60) 
let difofseconds = Math.ceil(leftoverofminutes*60)
din.innerHTML =  difofdays < 10? `0${difofdays}` : difofdays;
ghantay.innerHTML = difofhour < 10? `0${difofhour}` : difofhour;
minut.innerHTML = difofminutes < 10? `0${difofminutes}` : difofminutes;
second.innerHTML = difofseconds < 10? `0${difofseconds}` : difofseconds;
},1000)