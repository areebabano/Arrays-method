"use strict";
// Arrays Methods (pop,push,shift,unshift)
// pop
// let movies: string[] = ["Titanic","IronMan","Ztopia"];
// console.log(movies);
// movies.pop()
// console.log(movies);
// console.log(movies.pop());
// console.log(movies);
// push 
// let movies: string[] = ["Titanic","IronMan","Ztopia"];
// console.log(movies);
// movies.push("AngryBird")
// console.log(movies);
// shift 
// let movies: string[] = ["Titanic","IronMan","Ztopia"];
// console.log(movies);
// movies.shift()
// console.log(movies);
// Unshift 
// let movies: string[] = ["Titanic","IronMan","Ztopia"];
// console.log(movies);
// movies.unshift("AngryBird")
// console.log(movies);
// slice 
let programming = ["JS", "TS", "Python", "HTML", "C++", "Java", "CSS"];
console.log(programming);
let language = programming.slice(1, 5);
console.log(language);
console.log(programming);
// splice 
let socialMedia = ["Twitter", "Facebook", "Whatsapp", "LinkedIn", "Instagram", "Snapchat"];
console.log(socialMedia);
let platforms = socialMedia.splice(2, 1, "YouTube");
console.log(platforms);
console.log(socialMedia);
