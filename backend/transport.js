module.exports = function(ws, io){
    let module = {}
    module.send = (action, data) => {
        ws.send(
            JSON.stringify({
                'action': action,
                'data': data,
            })
        );
    }

    module.emit = (event, data) => {
        io.sockets.emit(event, data);
    }

    return module
}

