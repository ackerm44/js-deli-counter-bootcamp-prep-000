var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
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

function currentLine(array) {
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      return "The line is currently: " + i + 1 + ". " + array[i] + ", "
    } else {
      return "The line is currently empty."; 
    }

  }

}
