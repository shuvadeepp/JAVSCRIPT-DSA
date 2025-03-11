/* function x(){
    let name="i'm 3 sec delay!!!";
    setTimeout(function() {
        console.log(name);
    }, 3000);
    console.log('shuvadeep');
}
x(); */


const btn = document.getElementById("myButton");

btn.addEventListener('click', function(){
    console.log('btn clicked');
})
console.log('start script');

setTimeout(function(){
    console.log('Timeout 1');
}, 1000);

setTimeout(function(){
    console.log('Timeout 2');
}, 500);

console.log('end script');