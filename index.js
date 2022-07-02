// Write your solution here!
const cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(name){
  return  cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop()
}

function destructivelyRemoveFirstCat(name){
    return cats.shift()
}

function appendCat(name){
    const cat = [...cats, name]
    return cat
}

function prependCat(name){
    const cat = [name, ...cats]
    return cat
}

function removeLastCat(){
   
    return cats.slice(0,2)
}

function removeFirstCat(){
    return cats.slice(1)
}