let gallery = ["-1", "-2","-3", "-4","-5","-6","-7","-8","-9"]

for(let i=0; i<gallery.length; i++){

    let container = document.createElement("div");
    container.setAttribute("class","img-gallery-container")

    let link = document.createElement("a")
    link.setAttribute("href",`./gallery/${gallery[i]}.jpg`)
    link.setAttribute("target","._blank")

    let imgGal = document.createElement("img")
    imgGal.setAttribute("src",`./gallery/${gallery[i]}.jpg`)

    link.appendChild(imgGal)
    container.appendChild(link)
    document.getElementById("gallery-container").appendChild(container)

}