// spread operator arrays

// ARRAYS**
const arr =[1,2,3,4]

// const arrTest=["a","b","c"]

// esto crea un array dentro de otro array
// const arrTest=["a","b","c", arr]

// pone bien los elementos de un array dentro del otro, 
const arrTest=["a","b","c", ...arr]

// console.log(arrTest)



//OBJETOS**
const obj = {test: 1, test2: 2}

// const objTest = {obj}
// const objTest = {...obj}

// lo puedo ordenar, poner donde quiera
const objTest = {...obj,test3:3}
// console.log(objTest)



const a = [1,2,3]

// metodo includes
const testInc = a.includes(9)
// console.log(testInc)


const arrFind = a.find((value)=>value>1)
// va a buscar en orden ascendente los elementos del array y devuelve el elemento, la primera coincidencia, find requiere una función.
console.log(arrFind)