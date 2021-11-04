console.log('Task 5')

// const ask = (question, yes, no) => {
//     confirm(question) ? yes() : no()
// }

// ask('Вы согласны?', () => {
//     console.log('Вы согласились')
// },  () => {
//     console.log('Вы отменили выполнение.')
// })

console.log('Task 6')

const str = 'my-short-string'
let arr = str.split("-")
console.log(arr)

console.log('Task 7')
const arr2 = ['JavaScript', 2015]
console.log(arr2.join(' '))

console.log('Task 8')
let users = 
[
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5},

]

const fltr = users.filter(item => item.age > 20)
console.log(fltr)

console.log('Task 9')