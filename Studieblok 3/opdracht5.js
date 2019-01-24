window.addEventListener('mousemove', function (e){
    // console.log(`x: ${ e.x } | y: ${ e.y }`);

    document.getElementById('status').innerHTML = `${e.x} | ${e.y}`;
});
