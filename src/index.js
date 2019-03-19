import "./styles.css";
var n = 5;
var w = 300;
var h = 300;
var app = document.getElementById("app");

function createDiv(w, h, n) {
  if (n == 0) return;

  var div = document.createElement("div");
  div.style.display = "block";
  div.style.height = w + "px";
  div.style.width = h + "px";
  div.style.border = "1px";
  div.style.top = 0;
  div.style.left = 0;
  div.style.right = 0;
  div.style.bottom = 0;
  div.style.margin = "auto";
  div.style.position = "absolute";
  var R = w;
  div.style.backgroundColor = "rgb(" + 0.5 * R + ",10,100)";
  var wC = w - w / n;
  var hC = h - h / n;

  var child = createDiv(wC, hC, n - 1);
  if (child != null) {
    div.appendChild(child);
  }
  return div;
}

app.appendChild(createDiv(w, h, n));
