const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) { 
  kittens.push(name) 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop() 
}

function destructivelyRemoveFirstKitten()  {
  kittens.shift(1)
}

function appendKitten(name) {
  var new_kittens = [...kittens, name];
  return new_kittens
}

function prependKitten(name) {
  var new_kittens = kittens
  new_kittens.unshift(name)
  return new_kittens
  
}