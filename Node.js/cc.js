const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.on('join', function (id, client) {
  this.clients[id] = client;
  this.subscriptions[id] = function(serverId, message) {
    if (id!==serverId) {
      this.clients[id].write(message);
    }
    this.on('broadcast', this.subscriptions[id]);
  }
});

const server  = net.createServer(function(client){
  const id = `${client.remoteAddress}:${client.remotePort}`;
  channel.emit('join', id, client);
  channel.on('data', function(data) {
    console.log(999, data.toString())
    channel.emit('broadcast', id, data.toString())
  })
}); 

server.listen(9999);