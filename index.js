var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name);
  console.log("Welcome, " + name + ". You are number " + katzDeli[name] + " in line.")
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + array[0] + ".";
    array.shift();
  }


}
