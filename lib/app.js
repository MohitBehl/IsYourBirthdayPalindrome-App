var btnSubmit = document.querySelector("#btnSubmit");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

btnSubmit.addEventListener("click", clickEventHandler);

function clickEventHandler() {
  var date = input.value;
  if (date === "") {
    //error
  } else {
    date = date.split("-");

    year = date[0]; //year
    month = date[1]; //month
    day = date[2]; //day

    console.log("day : " + day + " month : " + month + " year : " + year);
    formats = getAllDateFormats(day, month, year); // all date formats

    var res = isPalindrome(formats);

    if (res) {
      output.innerText = "Selected Date is a palindrome";
    } else {
      output.innerText = "Selected Date is not a palindrome";
    }
  }
}

function getAllDateFormats(day, month, year) {
  var formats = [];
  formats.push(day + month + year);
  formats.push(month + day + year);
  formats.push(year + month + day);
  formats.push(day + month + year[2] + year[3]);
  formats.push(month + day + year[2] + year[3]);
  formats.push(year[2] + year[3] + month + day);

  return formats;
}

function isPalindrome(formats) {
  for (var i = 0; i < formats.length; i++) {
    if (isPalindromHelper(formats[i])) {
      console.log("true -> " + formats[i]);
      return true;
    }
  }
  return false;
}

function isPalindromHelper(date) {
  var reversedDate = date.split("").reverse().join("");
  return date === reversedDate;
}
