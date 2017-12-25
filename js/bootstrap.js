import '../sass/bootstrap.scss';

const obj = { first: 'John', last: 'Doe' };
const objClone = {...obj};

console.log('Testing object spread:');
console.log(obj, objClone);
