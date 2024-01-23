function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.innerText = data;

  const body = document.querySelector("body");
  body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(req.response.query.pages["21721040"].extract);
    }
  };

  const URL =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  req.open("GET", URL, true);
  req.responseType = "json";
  req.send(null);
}

queryWikipedia(createElement);
