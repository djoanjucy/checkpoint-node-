const os = require('os')

// info about current user 

const user = os.userInfo()

console.log(user)
// method return the system uptime 


console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type() ,
    release: os.release(),
    totalMen :os.totalmem(),
    freeMen : os.freemem() ,
}
console.log(currentOS)