var numberList = Array.from({ length: Math.floor(Math.random() * 20) + 10 }, () =>
  Math.floor(Math.random() * 100) + 10
);
function createArray() {
  numberList = Array.from({ length: Math.floor(Math.random() * 20) + 10 }, () =>
    Math.floor(Math.random() * 100) + 10
  );
  renderNumber()
} 
renderNumber()
function renderNumber() {
    document.getElementById("numberList").innerHTML = "";
    if (document.getElementById("increase").checked) {
      numberList.sort(function (a, b) {
        return a - b;
      });
    }
    if (document.getElementById("deincrease").checked) {
      numberList.sort(function (a, b) {
        return b - a;
      });
    }
    for (var i = 0; i < numberList.length; i++) {
      if (i !== numberList.length - 1) {
        document.getElementById("numberList").innerHTML += numberList[i] + ", ";
      } else {
        document.getElementById("numberList").innerHTML += numberList[i];
      }
    }
}
function getValue() {
  var number = Number(document.getElementById("valueInput").value);
  var position = Number(document.getElementById("position").value);
  numberList.splice(position, 0, number);
  renderNumber();
  document.getElementById("valueAfterGet").innerHTML = "";
  for (var i = 0; i < numberList.length; i++) {
    if (i !== numberList.length - 1) {
      document.getElementById("valueAfterGet").innerHTML += numberList[i] + ", ";
    } else {
      document.getElementById("valueAfterGet").innerHTML += numberList[i];
    }
  }
}

function toggleCheckbox(x, y) {
  if (document.getElementById(x).checked) {
    document.getElementById(y).checked = false;
    renderNumber();
  }
  if (document.getElementById(x).checked) {
    document.getElementById(y).checked = false;
    renderNumber();
  }
}



function changeStyle(text) {
    text.classList.add("animation")
    let changeColor = setInterval(() => {
        text.classList.toggle("changeColor")
    }, 200)
    setTimeout(() => {
        text.classList.remove("changeColor", "animation")
        clearInterval(changeColor)
    }, 6000)
}
setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (hours < 10) {
        const hour_1 = document.querySelector(".hour_1");
        const hour_2 = document.querySelector(".hour_2");
        hour_1.src = "img/00.gif";
        hour_2.src = `img/0${hours}.gif`;
    } else {
        const hour_1 = document.querySelector(".hour_1");
        const hour_2 = document.querySelector(".hour_2");
        hour_1.src = `img/0${Math.floor(hours / 10)}.gif`;
        hour_2.src = `img/0${hours % 10}.gif`;
    }

    if (minutes < 10) {
        const minute_1 = document.querySelector(".minute_1");
        const minute_2 = document.querySelector(".minute_2");
        minute_1.src = "img/00.gif";
        minute_2.src = `img/0${minutes}.gif`;
    } else {
        const minute_1 = document.querySelector(".minute_1");
        const minute_2 = document.querySelector(".minute_2");
        minute_1.src = `img/0${Math.floor(minutes / 10)}.gif`;
        minute_2.src = `img/0${minutes % 10}.gif`;
    }

    if (seconds < 10) {
        const second_1 = document.querySelector(".second_1");
        const second_2 = document.querySelector(".second_2");
        second_1.src = "img/00.gif";
        second_2.src = `img/0${seconds}.gif`;
    } else {
        const second_1 = document.querySelector(".second_1");
        const second_2 = document.querySelector(".second_2");
        second_1.src = `img/0${Math.floor(seconds / 10)}.gif`;
        second_2.src = `img/0${seconds % 10}.gif`;
    }

    const text = document.getElementsByClassName("title");
    if (hours < 12) {
        text[0].innerHTML = "Chào buổi sáng";
    } else if (hours < 17) {
        text[0].innerHTML = "Chào buổi chiều";
    } else {
        text[0].innerHTML = "Chào buổi tối";
    }

    if ( (hours == 12 || hours == 17 || hours == 20  ) && minutes == 00 && seconds == 00 ) {
        changeStyle(text[0])
    }
}, 1000);
