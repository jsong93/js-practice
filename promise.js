// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('fn')
//     }, 300)
// })

// promise.then(function (value) {
//     console.log(value)
// })

// console.log(promise)




let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 250)
})

myPromise1.then(successMessage => console.log(successMessage))
