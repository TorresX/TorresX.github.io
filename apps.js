const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);

const fruits = ['apple','pears','watermelon'];
fruits[3] = 'grape';
fruits.push('mango');// 相当于append
fruits.unshift('strawberry')// 相当于insert(0, "strawberry")
fruits.pop();
console.log(fruits);
 
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('watermelon'))

// class
const person={
    firstname: 'Torres',
    lastname: 'Francis',
    address:{
        suburb : 'Kensington',
        city : 'Sydney',
        state : 'NSW'
    }
}
console.log(person.address.state);
// 把class里面的变量拉出来
const {firstname, lastname, address: {state}} = person
console.log(`${firstname} ${lastname} lives in ${state}`)
// 往class里面添加东西
person.hobby = ['football','cart','yoka']
console.log(person)

const todos = [
    {
        id: 1,
        test: "wake up",
        isComplete: true
    },
    {
        id: 2,
        test: "brush teeth",
        isComplete: true
    } ,  
    {
        id: 1,
        test: "cook breakfast",
        isComplete: false
    }
]

console.log(todos[1].id)
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)