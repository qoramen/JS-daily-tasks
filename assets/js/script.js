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

const students = [
    {
        name: "Alice",
        age: 20,
        grade: 75,
        major: "Computer Science"
    },
    {
        name: "Bob",
        age: 22,
        grade: 82,
        major: "Mechanical Engineering"
    },
    {
        name: "Charlie",
        age: 19,
        grade: 90,
        major: "Mathematics"
    },
    {
        name: "Diana",
        age: 21,
        grade: 88,
        major: "Biology"
    },
    {
        name: "Ethan",
        age: 23,
        grade: 70,
        major: "History"
    }
];

// let max = 80

// for (let index = 0; index < students.length; index++) {
//     if (students[index].grade >= max) {
//         // console.log(students[index]);

//         console.log(`Name: ${students[index].name}, Grade: ${students[index].grade}, Major: ${students[index].major}`);
//     } else {
//         continue
//     }
// }

for (let index = 0; index < students.length; index++) {
    if (students[index].grade >= 90) {
        console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} A, Major: ${students[index].major}`);
    } else if (students[index].grade >= 85 && students[index].grade < 90) {
        console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} B, Major: ${students[index].major}`);
    } else if (students[index].grade >= 80 && students[index].grade < 85) {
        console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} C, Major: ${students[index].major}`);
    } else if (students[index].grade >= 75 && students[index].grade < 80) {
        console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} F, Major: ${students[index].major}`);
    } else if (students[index].grade < 75) {
        console.log(`Name: ${students[index].name}, Grade: ${students[index].grade} PASS, Major: ${students[index].major}`);
    }
}