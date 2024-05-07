var mins_html=document.getElementById("mins")
var secs_html=document.getElementById("secs")
var millisec_html=document.getElementById("millisecs")
var start_btn=document.getElementById("start_btn")

var mins=0
var sec=0
var millisec=0

var watchinterval
function start () {
    watchinterval = setInterval (function(){
    millisec++

    if(millisec >= 99 ){
        sec ++
        millisec=0
    }
    if(sec >=59 ){
        mins ++
        sec=0
    }

    mins_html.innerText=mins < 10 ? '0' + mins : mins
    secs_html.innerText=sec < 10 ? '0' + sec : sec
    millisec_html.innerText = millisec  < 10 ? '0' + millisec : millisec
    start_btn.disabled=true
},10)
} 
function stop (){
    clearInterval(watchinterval)
    start_btn.disabled=false

}
function reset(){
    clearInterval(watchinterval)
    mins=0
    sec=0
    millisec=0
    mins_html.innerText=mins
    secs_html.innerText=sec
    millisec_html.innerText=millisec
    start_btn.disabled=false
}
