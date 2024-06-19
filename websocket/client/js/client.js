var ws = new WebSocket("ws://localhost:8080/echo")

ws.onopen = function(){
    // web socket is connected, send data using send()
    ws.send("Message to send");
    console.log("Message is sent...");
};

ws.onmessage = function(evt){
    var recieved_msg = evt.data;
    console.log("Message is recieved...");
    console.log(recieved_msg)
}