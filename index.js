var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name);
  console.log("Welcome, " + name + ". You are number " + katzDeli[name] + " in line.")
}

function nowServing(array) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeli[0] + ".";
    katzDeli.shift();
  }


}
