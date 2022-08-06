function datemonth(){
let a = new Date();
console.log("The current date is"+ ":"+a.getDate())
console.log("The current month is" + ":"+ a.getMonth())
}


function getBatchInfo(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system")
}

module.exports.help=datemonth