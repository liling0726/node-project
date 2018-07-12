function A(){
    console.log('A')
}
function B(){
    console.log('B')
}
function C(){
    console.log('C')
}

setTimeout(B,0)
process.nextTick(C)
A()