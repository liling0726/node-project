var name = '58同城';
var age = 10;
var jsonInfo = {name:'58同城用户增长部',age:'10',location:'北京'};
console.log('%j => name=%s,age=%d', jsonInfo, name, age);
console.error('%j => name=%s,age=%d', jsonInfo, name, age);
console.info('%j => name=%s,age=%d', jsonInfo, name, age);
console.warn('%j => name=%s,age=%d', jsonInfo, name, age);
console.debug('%j => name=%s,age=%d', jsonInfo, name, age);

//console.dir(age)
/* console.group('第一组')
console.log('你的名字')
console.log('等风来')

console.groupEnd()

console.group('第二组')
console.log('灰姑娘')
console.log('白雪公主')
console.groupEnd() */

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);