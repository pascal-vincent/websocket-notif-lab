
io.socket.on('connect', function () {
    io.socket.get('/topic?where={"name":["100200","200300"]}', {}, function (topic) {
        console.log(JSON.stringify(topic));
    });

   io.socket.on('topic', function (event) {
       console.log('Got event : ' + event.verb);
       console.log('with data : ' + JSON.stringify(event.data));
   })
});
