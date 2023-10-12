let arr = [
  "BM.png",
  "WIN.png",
  "YOK.png",
  "lifeart-logo.png.webp",
  "OMV.png",
  "RG.png",
  "FCC.png",
  "RENOV.png",
  "VNT.svg",
  "BRT.jpeg",
  "BSNL.png",
  "TAN.jpg",
  "TEP.svg",
  "TOY.png",
  "TVR.png",
  "BUCO.png",
  "FG.png",
  "EM.png",
  "LS.png",
  "Maspex.png",
  "NEST.png",
  "LOGO NOU.jpg",
  "LM.png",
  "MON.png",
  "RG.png",
  "SC.png",
  "SPIETH.png",
  "STERG.png",
  "QS.jpg",
  "AP.png",
  "AR.png",
  "IWA.png",
  "UZ.png",
  "MED.png",
];

for (let i = 0; i < arr.length; i++) {
  let element2 = document.createElement("div");
  element2.setAttribute("class", "slide");
  let img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", `./assets/Sponsor Logos/${arr[i]}`);

  element2.appendChild(img);
  document.getElementById("append-in").appendChild(element2);
}

for (let i = arr.length - 1; i > 0; i--) {
  let element2 = document.createElement("div");
  element2.setAttribute("class", "slide");
  let img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", `./assets/Sponsor Logos/${arr[i]}`);

  element2.appendChild(img);
  document.getElementById("append-in-2").appendChild(element2);
}
