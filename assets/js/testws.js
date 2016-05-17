
io.socket.on('connect', function () {
    io.socket.get('/topic/573a1c323637ed818e373a40', {}, function (topic) {
        console.log(JSON.stringify(topic));
    });

   io.socket.on('topic', function (event) {
       console.log('Got event : ' + event.verb);
       console.log('with data : ' + JSON.stringify(event.data));
   })
});
