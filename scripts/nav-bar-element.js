let arrSponsori = [
  "home",
  "live",
  "event files",
  "results",
  "gallery",
  "accreditation",
  "volunteer",
  "contact",
];

for(let i=0; i<arrSponsori.length;i++){

    let element = document.createElement("li");
    element.setAttribute("class", "nav-item");

    let link = document.createElement("a");
    link.setAttribute("class","nav-link link text-danger text-primary display-6 header-button");
    link.setAttribute("href",`./${arrSponsori[i]}.html`);
    link.innerHTML = `${arrSponsori[i].toUpperCase()}`;

    if(arrSponsori[i] === "home"){
        link.setAttribute("href",`./index.html`);
    }

    element.appendChild(link)

    document.getElementById("navbar-append").appendChild(element)

}

for(let i=0; i<arrSponsori.length;i++){

    let element = document.createElement("li");
    element.setAttribute("class", "nav-item");

    let link = document.createElement("a");
    link.setAttribute("class","nav-link link text-danger text-primary display-6 header-button");
    link.setAttribute("href",`./${arrSponsori[i]}.html`);
    link.innerHTML = `${arrSponsori[i].toUpperCase()}`;

    if(arrSponsori[i] === "home"){
        link.setAttribute("href",`./index.html`);
    }

    element.appendChild(link)

    document.getElementById("navbar-append2").appendChild(element)

}