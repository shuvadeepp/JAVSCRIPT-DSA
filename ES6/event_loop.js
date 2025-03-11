

// call async code:
getCoffee();
// playMusic();

function getCoffee(){
    console.log('Ordering Coffee');  
    doAsyneStuff(()=> {
        console.log('your coffee is here...');
    });
    playMusic(function(){
        console.log('ok playing music...');
    });
}

function playMusic(callback){
    console.log('Play the music...'); 
    setTimeout(function(){
        callback();
    }, 1000);
}

function doAsyneStuff(callback){
    setTimeout(function(){
        callback();
    }, 2000); 
}
