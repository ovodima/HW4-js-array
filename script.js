console.log('Task 5')

const ask = (question, yes, no) => {
    if(confirm(question)) yes()
        else no()
}

ask('Вы согласны?', function () {
    console.log('Вы согласились')
}, function () {
    console.log('Вы отменили выполнение.')
})

console.log('Task 6')