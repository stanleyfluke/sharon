function checkPin1(){
    const input = document.getElementById("pin1").value;
    const present1 = document.getElementById("present1");
    const text1 = document.getElementById("text1");

    const correctPin = "5135";

    if (input === correctPin) {
        present1.style.display = "block";
        text1.style.display = "block";
      } else {
        alert("Hmm… that’s not the right PIN, but you just unlocked my heart anyway 💕");
      }
}

function checkPin2(){
    const input = document.getElementById("pin2").value;
    const present2 = document.getElementById("present2");
    const text2 = document.getElementById("text2");

    const correctPin = "7241";
    
    if (input === correctPin) {
        present2.style.display = "block";
        text2.style.display = "block";
      } else {
        alert("Wrong PIN, but you’re still my favorite password 💖");
      }
}

function checkPin3(){
    const input = document.getElementById("pin3").value;
    const present3 = document.getElementById("present3");
    const text3 = document.getElementById("text3");

    const correctPin = "3008";

    if (input === correctPin) {
        alert("Every code you cracked brought you closer to the truth. The final reward isn’t all about goods/materials etc — it’s something real, waiting in your hands… and a secret I’ve been waiting to tell you");
      } else {
        alert("That’s not it… but you just cracked the code to my heart 💓");
      }
}