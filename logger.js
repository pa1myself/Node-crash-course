const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
    this.emit('message', { id: uuid.v4(), msg });
    }
}

//module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('called Listener', data));

logger.log('Hello World');
logger.log('Hii');
logger.log('Hello ');





