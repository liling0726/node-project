
const fs = require('fs')
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// custom simple logger
const logger = new console.Console(output,errorOutput);
/* const logger = new console.Console({
    stdout:output,
    stderr:errorOutput
}); */
const name = 'jone'
const user={
    name:'aa'
}
logger.log('hello')
logger.log('hello %s',name)

logger.error('error,bad user', user)
logger.log('hello',name)
logger.warn('warn')
logger.info('info')
