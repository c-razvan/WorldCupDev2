let videoCarusel = ["ITA.MP4"]

for(let i=0; i<videoCarusel.length; i++){


    let vid = document.createElement("video")
    vid.setAttribute("src",`./assets/Clips/${videoCarusel[i]}`)
    vid.setAttribute("controls","true")
    vid.setAttribute("type","video/mp4")
    vid.setAttribute("autoplay","true")
    vid.setAttribute("muted","true")


    document.getElementById("videos-container").appendChild(vid)

}