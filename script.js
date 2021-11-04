console.log('Task 5')

const ask = (question, yes, no) => {
    if(confirm(question)) yes()
        else no()
}

ask('Вы согласны?', () => {
    console.log('Вы согласились')
},  () => {
    console.log('Вы отменили выполнение.')
})

console.log('Task 6')
