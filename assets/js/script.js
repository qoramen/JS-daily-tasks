// let a = 'suv'
// let b = 'choy'
// let c = ''

// c = a
// a = b
// b = c

// console.log(a);
// console.log(b);

// const obj = {
//     a: 6,
//     b: 6
// }

// if (obj.a < obj.b) {
//     console.log('b katta a dan');
// } else if (obj.a > obj.b) {
//     console.log('a katta b dan');
// } else if (obj.a == obj.b) {
//     console.log('a va b teng');    
// }

// const even = []
// const odd = []

// for (let index = 1; index <= 100; index++) {
//     if (index % 2 == 0) {
//         even.push(index)
//     } else {
//         odd.push(index)
//     }

// }

// console.log(even);
// console.log(odd);

// const array = [
//     { title: "Naruto", genre: "Action", rating: 8.5 },
//     { title: "One Piece", genre: "Adventure", rating: 9.0 },
//     { title: "Death Note ", genre: "Mystery", rating: 9.2 },  
// ];

// let max = 9.0

// for (let index = 0; index < array.length; index++) {
//     if (array[index].rating >= max) {
//         console.log(array[index]);
//     } else {
//         continue
//     }
// }

// const students = [
//     {
//         name: "Alice",
//         age: 20,
//         grade: 75,
//         major: "Computer Science"
//     },
//     {
//         name: "Bob",
//         age: 22,
//         grade: 82,
//         major: "Mechanical Engineering"
//     },
//     {
//         name: "Charlie",
//         age: 19,
//         grade: 90,
//         major: "Mathematics"
//     },
//     {
//         name: "Diana",
//         age: 21,
//         grade: 88,
//         major: "Biology"
//     },
//     {
//         name: "Ethan",
//         age: 23,
//         grade: 70,
//         major: "History"
//     }
// ];

// let max = 80

// for (let index = 0; index < students.length; index++) {
//     if (students[index].grade >= max) {
//         // console.log(students[index]);

//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade}, Major: ${students[index].major}`);
//     } else {
//         continue
//     }
// }

// for (let index = 0; index < students.length; index++) {
//     if (students[index].grade >= 90) {
//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} A, Major: ${students[index].major}`);
//     } else if (students[index].grade >= 85 && students[index].grade < 90) {
//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} B, Major: ${students[index].major}`);
//     } else if (students[index].grade >= 80 && students[index].grade < 85) {
//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} C, Major: ${students[index].major}`);
//     } else if (students[index].grade >= 75 && students[index].grade < 80) {
//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} F, Major: ${students[index].major}`);
//     } else if (students[index].grade < 75) {
//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} PASS, Major: ${students[index].major}`);
//     }
// }

/* ---- Home Task 1 ---- */
// const arr = []

// for (let index = 1; index <= 20; index++) {
//     let prime = true

//     for (let i = 2; i < index; i++) {
//         if (index % i === 0) {
//             prime = false
//             break
//         }

//     }

//     if (prime) {
//         arr.push(index)   
//     } 
// }

// console.log(`1 dan 20 gacha bo'lgan tub sonlar: ${arr}`);

/* Home Task 2 */

// const order = {
//     customer: {
//         name: 'Asal',
//         contact: {
//             phone: '998901112233',
//             email: ''
//         }
//     },
//     items: [
//         { name: 'Laptop', price: 1200 },
//         { name: 'Mouse', price: 25 }
//     ],
//     payment: null,
//     shipping: {
//         address: {
//             city: 'Tashkent',
//             street: 'Yunusabad 5'
//         },
//         delivered: true
//     }
// };

// const arr = []

// for (let i = 0; i < order.items.length; i++) {
//     arr.push(order.items[i].price)
// }

// console.log(`Customer Name: ${order.customer.name}`);
// console.log(`Customer Phone: ${order.customer.contact.phone || 'Phone not available'}`);
// console.log(`Customer Email: ${order.customer.contact.email || 'No email provided'}`);
// console.log(`Payment: ${order.payment ?? 'Payment pending'}`);
// console.log(`Total: ${total(...arr)}`);
// delivery()
// console.log(order.customer.loyaltyCard?.point ?? 'No loyalty points');
// if (order.getTrackingCode?.()) {
//     order.getTrackingCode?.()
// }

// function total(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// function delivery() {
//     if (order.shipping.address.city) {
//         console.log(`Shipping to: ${order.shipping.address.city}`);
//     } else {
//         console.log('Delivery address missing')
//     }

//     if (order.shipping.delivered) {
//         console.log('Order has been delivered');
//     }
// }

/* Home Task 3 */

// let getPrompt = prompt("Please enter your city") ?? 'New Jersey'

// if (getPrompt == '') {
//     getPrompt = 'New Jersey'
// }

// console.log(getPrompt);
