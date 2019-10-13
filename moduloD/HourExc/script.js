
function loader () {
    var msg = window.document.getElementById("msg");
    var secondMsg = window.document.getElementById("second-msg");  
    var img = window.document.getElementById("img");
    var data = new Date()
    var hoursInput = window.document.getElementById("hourInput").value;
    var minutesInput = window.document.getElementById("minuteInput").value;
    var hours;
    var minutes;

        // To fix a caller function that choose if the input in valid, if isn't set the value by default.
      /*  function hourChanger() {
            if (hoursInput.value !== "" && minutesInput.value !== "" ) {
                var hours = hoursInput;
                var minutes = minutesInput
                return;    
            }
          
            else {
      */
                var hours = data.getHours();
                var minutes = data.getMinutes();
        //        return;
          //  }    
        //}
    //hourChanger();
    msg.innerHTML = `It's ${hours}h:${minutes}m.`;
    

    

    if (hours >= 6 && hours < 12) {
        img.src =`morning.png`
        document.body.style.background = "#bdf1f9";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good morning`
    }else if (hours >= 12 && hours < 18) {
        img.src =`afternoon.png`
        document.body.style.background = "#FFAB68";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good afternoon`
    }else {
        img.src =`night.png`
        document.body.style.background = "#777777";
        secondMsg.innerHTML = `If you're seeing my project I wish you a good night`
    }    
}