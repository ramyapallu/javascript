console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');
// let, const

const score = 10;

console.log(score);
// String, Numbers, Boolean, null,  undefined

const name = 'John'
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof rating);

// Concentation
console.log('My name is name ' + name + ' and I am ' + age);
//  Template String
const hello = 'My name is ${name} and I am ${age}';

console.log(hello);

const s ='Hello World!';

console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log(s.substring(0,5).toUpperCase());

console.log(s.split(''));
// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangoes');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName);

person.email = 'john@gmail.com';

console.log(person);

const todos = [
    {
     id: 1,
     text: 'Take out trash',
     isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true  
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

console.log(window);

// Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

// Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
console.log (ul,(test100));
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
console.log(ul.firstElementChild.textContent);
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
 e.preventDefault();
 document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
 document.querySelector('.items')
 .lastElementChild.innerHTML = '<h1>Hello</h1>';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
     msg.innerHTML = 'Please enter all fields';
    } else {
    
    console.log('success');
   }
}

