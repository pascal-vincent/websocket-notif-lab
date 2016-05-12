io.socket.on('connect', function () {
    io.socket.get('/alerts', {}, function (alerts) {
        console.log(JSON.stringify(alerts));
    });

   io.socket.on('alerts', function (event) {
       console.log('Got event : ' + event.verb);
   })
});
