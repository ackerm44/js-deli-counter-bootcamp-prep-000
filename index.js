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
    var string = "The line is currently: ";
    if (array.length > 0) {
      string = string + (i + 1) + ". " + array[i] + ", "
    } else if (array.length == 0) {
      return "The line is currently empty.";
    }

  }

}
