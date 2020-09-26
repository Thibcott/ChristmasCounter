setInterval(remainingTime, 1000); 

function remainingTime() {
    var actualDate = new Date();
    const christmasDate = new Date('12/25/2020');
    const diffTime = Math.abs(christmasDate - actualDate);

    console.log(diffTime + " milliseconds");

    //calcule jours 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");

    //calcule heures
    const diffHours = 24 - actualDate.getHours();
    console.log(diffHours + " hours");
    
    //calcule minutes
    const diffMinutes = 59 - actualDate.getMinutes();
    console.log(diffMinutes + " minutes");
    
    //calcule secondes
    const diffSecondes = 59 - actualDate.getSeconds();
    console.log(diffSecondes + " secondes");
    
    //log
    console.log(typeof(diffDays));
    
    //affichage 
    document.getElementById("days").innerHTML = "Jours : " + diffDays;
    document.getElementById("hours").innerHTML = "Heures : " + diffHours;
    document.getElementById("minutes").innerHTML = "Minutes : " + diffMinutes;
    document.getElementById("seconds").innerHTML = "Secondes : " + diffSecondes;
}
