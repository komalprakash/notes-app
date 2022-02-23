//console.log('Success!!!!')
const fs = require('fs')
//const validator = require('validator')
const yargs = require('yargs')
// fs.writeFileSync('notes.txt','Hello new file')
// fs.appendFileSync('notes.txt', ' appended text')
const name = require('./utils.js')
const notes= require('./notes.js')
// const add = name(4,6)
// console.log(add)

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

console.log(process.argv)
console.log(yargs.argv)