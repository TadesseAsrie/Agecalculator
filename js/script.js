let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("age");
let dark = document.getElementById("dark");
function calculateAge() {
  if (userInput.value == "") {
    age.textContent = "please Enter your birth date !!!";
    age.style.color = "orange";
    age.style.fontSize = "20px";
    age.style.textAlign = "center";
  } else {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDIM(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y--;
    }
    age.textContent = `you are ${y3} years,${m3} months and ${d3} days old`;
    age.style.textAlign = "center";
    age.style.fontSize = "20px";
  }
}
function getDIM(year, month) {
  return new Date(year, month, 0).getDate();
}
function darkMood() {
  dark.style.backgroundColor = "black";
  dark.textContent = "know i am not work";
}
