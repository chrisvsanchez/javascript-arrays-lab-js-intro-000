var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(kittens[0]);
}

function appendKitten(name){
  let arr = kittens.concat(name);
  return arr;
}

function prependKitten(name){
return [name,...kittens];
}

function removeFirstKitten(){
 return kittens.slice(1);
}

function removeLastKitten(){
 let arra =  kittens.slice(0, kittens.length-1);
 return arra;
}