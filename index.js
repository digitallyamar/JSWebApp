let head = document.head;
let body = document.body;

body.setAttribute("style", "background:#287cbd");

///////////////////////////////////////////////////////////////////////////////
// Navigation Start
///////////////////////////////////////////////////////////////////////////////

let nav = document.createElement("nav");
nav.setAttribute("style", "background: white; ");

let homeLink = document.createElement("a");
homeLink.href = "muddoo.com";
homeLink.innerText = "Muddoo";
homeLink.setAttribute(
  "style",
  "text-decoration:none; padding: 10px; background:wheat;"
);

let wikiLink = document.createElement("a");
wikiLink.href = "wikipedia.org";
wikiLink.innerText = "Wikipedia";
wikiLink.setAttribute(
  "style",
  "text-decoration:none; padding:10px; margin:10px; background:wheat"
);

nav.appendChild(homeLink);

nav.appendChild(wikiLink);

body.appendChild(nav);

///////////////////////////////////////////////////////////////////////////////
// Navigation End
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Header Start
///////////////////////////////////////////////////////////////////////////////

let header = document.createElement("header");

header.setAttribute(
  "style",
  "background-image: url('./butterfly.jpg'); display:flex; flex-direction: row; justify-content: center; align-items: center; background-size: cover; width: 100%; height: 200px;"
);

headerText = document.createElement("h1");
headerText.setAttribute("style", "color: white;");
headerText.innerText = "Welcome To Amar's WebApp";

header.appendChild(headerText);

body.appendChild(header);

///////////////////////////////////////////////////////////////////////////////
// Header End
///////////////////////////////////////////////////////////////////////////////

let article = document.createElement("article");
article.setAttribute(
  "style",
  "width: 100%; height: 100%; background-color: white"
);

let p1 = document.createElement("p");
p1.innerText =
  "Representing tabular data on a webpage in an understandable, \
accessible way can be a challenge. This module covers basic table markup, \
along with more complex features such as implementing captions and summaries.";

let p2 = document.createElement("p");
p2.innerText =
  "Forms are a very important part of the Web — these provide \
much of the functionality you need for interacting with websites, e.g. \
registering and logging in, sending feedback, buying products, and more. \
This module gets you started with creating the client-side/front-end parts of forms.";

article.appendChild(p1);

article.appendChild(p2);

body.appendChild(article);
