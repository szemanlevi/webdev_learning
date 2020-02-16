// FUNCTIONS

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// var sayBye = function() {
//     console.log("Bye");
// }

// sayBye();

// function sing() {
//     console.log("AAAAAAHHHHHHH");
//     console.log("TEEEEEEEEEE");
// }

// function sing(song) {
//     console.log(song);
// }

// sing("laa dee daa")

// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "that's too hard";
//     } else {
//         return a * b;
//     }
// }

// ARRAYS

// var list = ["tiger", "cat", "bear", "bird"];
// console.log(list[1]);

// OBJECTS

// var user = {
//     name: "John",
//     age: 34,
//     hobby: "Soccer",
//     isMarried: false,
//     spells: ["abrakadabra", "shazam", "boo"]
//     shout: function() {
//         console.log("AAAAAAHHHHH!");
//     }
// };

// var list = [
//     {
//         username: "andy",
//         password: "secret"
//     },
//     {
//         username: "jess",
//         password: "123"
//     }
// ];

var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "levi",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired..."
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your passpord?");

function signIn(user, pass) {
    for (i = 0; i < database.length; i++) {
        if (user === database[i].username &&
            pass === database[i].password) {
                console.log(newsFeed);
            } else if (!(user === database[i].username &&
                pass === database[i].password)) {
                pass
            }
        }
    };

signIn(userNamePrompt, passwordPrompt);