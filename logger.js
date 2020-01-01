const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());//0c7c0a04-dcff-4718-a700-8f4075cdea73

class Logger extends EventEmitter {
    log(msg) {
      // Call event
      this.emit('message', { id: uuid.v4(), msg });
    }
}
//module.exports = Logger;
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');//Called Listener { id: '5183e040-6772-4c83-97cb-e15bae82140c', msg: 'Hello World' }
logger.log('Hi');
logger.log('Hello');