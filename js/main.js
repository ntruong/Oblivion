const listSymbol = "×";

const bookmarks = [
  {
    red: "https://redacted.ch/login.php",
    git: "https://github.com/login",
    dc:  "https://discord.com/login",
    gh:  "https://geekhack.org/index.php?action=login",
  },
  {
    ucf: "https://texasucf.slack.com",
    bbg: "https://www.bloomberg.com",
    ust: "https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield",
    hn:  "https://news.ycombinator.com/",
  }
];

function $(id) { return document.getElementById(id); };

// Create a list of lists of links to create a bookmark menu
function buildBookmarks(links) {
  var container = document.createElement("ul");
  container.classList.add("bookmarks", "hidden");
  links.forEach((dict, idx, ls) => {
    var li = document.createElement("li");
    li.classList.add("hidden");
    var col = document.createElement("ul");
    col.classList.add("hidden");
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

// Load extras when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  $("bookmarks").appendChild(buildBookmarks(bookmarks));
  $("greeting").innerHTML = greet();
});
