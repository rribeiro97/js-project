
function loader () {
    var msg = window.document.getElementById("msg"),
        secondMsg = window.document.getElementById("second-msg"),
        img = window.document.getElementById("img"),
        data = new Date(),
        hoursInput = window.document.getElementById("hourInput"),
        minutesInput = window.document.getElementById("minuteInput");

    function setRealTime() {
        hoursInput.value = data.getHours();
        minutesInput.value = data.getMinutes();
    }

    function clearField() {
        window.document.getElementById("hourInput").value = '';
        window.document.getElementById("minuteInput").value = '';
    }

    if  (hoursInput.value === "" && minutesInput.value === "") {
        setRealTime();
        clearField();
    }

    if ((hoursInput.value > 23 || hoursInput.value < 0) || (minutesInput.value > 60 || minutesInput.value < 0)) {
        alert("Please, insert a valid number for hour and minutes");
        clearField();
        setRealTime();
    }

    msg.innerHTML = `It's ${hoursInput.value || data.getHours()}h:${minutesInput.value || data.getMinutes()}m.`;    
    

    if (hoursInput.value >= 6 && hoursInput.value < 12) {
        img.src =`morning.png`
        document.body.style.background = "#bdf1f9";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good morning`
    } else if (hoursInput.value >= 12 && hoursInput.value < 18) {
        img.src =`afternoon.png`
        document.body.style.background = "#FFAB68";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good afternoon`
    } else {
        img.src =`night.png`
        document.body.style.background = "#777777";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good night`
    }    
}
