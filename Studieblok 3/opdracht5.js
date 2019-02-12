window.addEventListener('mousemove', function (e){//Whenever the user moves of the mouse on the window
    // console.log(`x: ${ e.x } | y: ${ e.y }`); //a log that spits out the mouse positions

    document.getElementById('status').innerHTML = `${e.x} | ${e.y}`;//Changes the values Of the innerHTML with the values of the mouse position 
});
