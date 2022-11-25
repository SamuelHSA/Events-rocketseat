const { EventEmitter } = require('events')
const events = new EventEmitter()

events.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

events.emit('saySomething', "Samuel")
events.emit('saySomething', "Gabriel")
events.emit('saySomething', "Rafael")