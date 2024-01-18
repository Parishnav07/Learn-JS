// Datatypes Summary

// JavaScript is Dynamically typed Language

// 1. Primitive datatypes
// 2. Non-Primitive / Refrence datatypes

// Primitive Datatypes : String,Number, Bigint, Boolean,Undefined,null, Symbol
// Refrence Datatypes : Array,object ,function,

const score = 100
const scoreValue = 100.5
const isLoggedIn = true
const outSideTemp = null
let userEmail;   // undefined
const id = Symbol("123")
const anoId = Symbol("123")
console.log(id == anoId)    //false

const bigNumber = 80773433615680773433n;
// Use the Vriable Name meaningful


const heros = ["Shaktiman" ,"Hanuman","Naagraj"];   // Array

let myObj = {
                name : "Parishnav",
                age : 19,
}

const myFunction = function(){
                    console.log("hello ");
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)