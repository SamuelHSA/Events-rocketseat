const { EventEmitter } = require('events')
const events = new EventEmitter()
const ev = new EventEmitter()

events.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

events.emit('saySomething', "Samuel")

ev.on('saySomething', (message) => {
    console.log('Eu não te ouvi: ', message)
})

ev.emit('saySomething', "Kaka")
