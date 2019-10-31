
function loader () {
    var msg = window.document.getElementById("msg");
    var secondMsg = window.document.getElementById("second-msg");  
    var img = window.document.getElementById("img");
    var data = new Date()
    var hoursInput = window.document.getElementById("hourInput").value;
    var minutesInput = window.document.getElementById("minuteInput").value;


    function setRealTime() {
        hoursInput = data.getHours();
        minutesInput = data.getMinutes();
    }
    if  (hoursInput === "" && minutesInput === "") {
        setRealTime();
    }
    if ((hoursInput > 23 || hoursInput < 0) || (minutesInput > 60 || minutesInput < 0)) {
        alert("Please, insert a valid number for hour and minutes");
         window.document.getElementById("hourInput").value = '';
         window.document.getElementById("minuteInput").value = '';
        setRealTime();
        
    }

    msg.innerHTML = `It's ${hoursInput}h:${minutesInput}m.`;    
    

    if (hoursInput >= 6 && hoursInput < 12) {
        img.src =`morning.png`
        document.body.style.background = "#bdf1f9";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good morning`
    }else if (hoursInput >= 12 && hoursInput < 18) {
        img.src =`afternoon.png`
        document.body.style.background = "#FFAB68";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good afternoon`
    }else {
        img.src =`night.png`
        document.body.style.background = "#777777";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good night`
    }    
}