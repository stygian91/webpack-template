import '../sass/bootstrap.scss';

console.log('Testing object spread:');

const obj = { first: 'John', last: 'Doe' };
const objClone = {...obj};

console.log(obj, objClone);

console.log('Testing "Transform Class Properties"');

class Lorem {
    constructor() {
        this.bar = 'bar';
    }

    foo = () => {
        console.log(this.bar);
    };
}

new Lorem().foo();
