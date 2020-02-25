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
  return kittens.concat(name);
}

function prependKitten(name){
 return kittens.concat(name);

}

function removeFirstKitten(){
  return kittens.slice(0);
 
}
function removeLastKitten(){
  let newAr r= kittens.slice(0, kittens.length-1);
  return newArr;
  
}