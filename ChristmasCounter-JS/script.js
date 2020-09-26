var myVar = setInterval(myFunction, 1000); 

function myFunction() {
    
    var date1 = new Date();
    const date2 = new Date('12/25/2020');
    const diffTime = Math.abs(date2 - date1);
    console.log(diffTime + " milliseconds");  
    //calcule jours 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");

    //calcule heurs
    const diffhours = 24 - date1.getHours();
    console.log(diffhours + " hours");
    
    //calcule  minute
    const diffMinute = 59 - date1.getMinutes();
    console.log(diffMinute + " Minutes");
    
    //calcule  seconde
    const diffSeconde = 59 - date1.getSeconds();
    console.log(diffSeconde + " Secondes");
    
    //log
      
 

    console.log(typeof(diffDays));
    
    //affichage 
    document.getElementById("days").innerHTML = "jours : " + diffDays;
    document.getElementById("hours").innerHTML = "heurs : " + diffhours;
    document.getElementById("Minutes").innerHTML = "Minutes : " + diffMinute;
    document.getElementById("Seconds").innerHTML = "Secondes : " + diffSeconde;


}

//to do formater l affichage et poffiner le css et changer la couleur de l arriere plan  