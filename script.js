(function(){
    const todaysDate = new Date();
    var hrs = todaysDate.getHours();

    var greeting;

    if(hrs < 12){
        greeting = 'Good Morning';
    } else if(hrs >= 12 && hrs <= 17){
        greeting = 'Good afternoon'
    } else if(hrs >= 17 && hrs <= 20){
        greeting = 'Good Evening'
    } else if(hrs >= 20 && hrs <= 24){
        greeting = 'Good night'
    }
    document.getElementById('greeting').innerHTML = greeting + " ,  Alien.";
})()

