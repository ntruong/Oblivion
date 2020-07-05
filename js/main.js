const listSymbol = "×";

const bookmarks = [
  {
    red: "https://redacted.ch/login.php",
    git: "https://github.com/login",
    ucf: "https://texasucf.slack.com",
    dc:  "https://discord.com/login",
  },
  {
    bbg: "https://www.bloomberg.com",
    fin: "https://finance.google.com/",
    ust: "https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield",
    hn:  "https://news.ycombinator.com/",
  }
];

function $(id) { return document.getElementById(id); };

// Create a list of lists of links to create a bookmark menu
function buildBookmarks(links) {
  var container = document.createElement("ul");
  container.classList.add("bookmarks");
  links.forEach((dict, idx, ls) => {
    var li = document.createElement("li");
    var col = document.createElement("ul");
    col.classList.add("hiddenV");
    for (var key in dict) {
      col.innerHTML += "<li><a href=\"" + dict[key] + "\">" + key + "</a></li>";
    };
    li.innerHTML += "<span>" + listSymbol + "</span>";
    li.appendChild(col);
    container.appendChild(li);
  });
  return container;
};

// Create the appropriate greeting
function greet() {
  var d = new Date();
  var n = d.getHours();
  var msg = "good ";

  if      ( n >= 22 || n == 0  ) { msg += "night"; }
  else if ( n >= 1  && n <= 4  ) { msg += "night"; }
  else if ( n >= 5  && n <= 11 ) { msg += "morning"; }
  else if ( n >= 12 && n <= 17 ) { msg += "afternoon"; }
  else if ( n >= 18 && n <= 21 ) { msg += "evening"; }

  return "<h1>" + msg + "</h1>";
};

// Hide all children (recursively) of a given node
function obfuscate(node, hide = true) {
  if (hide) { node.style.visibility = "hidden"; };
  Array.prototype.forEach.call(node.children, (x) => obfuscate(x));
};

// Reveal all children (recursively) of a given node
function reveal(node) {
  node.style.visibility = "visible";
  Array.prototype.forEach.call(node.children, reveal);
};

// Load extras when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  $("bookmarks").appendChild(buildBookmarks(bookmarks));
  $("greeting").innerHTML = greet();
});
