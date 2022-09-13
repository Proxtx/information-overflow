import { build } from "../lib/uiBuilder.js";

const warp = document.getElementById("wrap");
let infoManger = await framework.load("infoManger.js");

const buildLoop = async () => {
  while (true) {
    let info = await infoManger.getInfo(cookie.pwd);
    warp.innerHTML = "";
    for (let obj of info.build) warp.appendChild(build(obj));
    await new Promise((r) => setTimeout(r, 10000 * 10000));
  }
};

buildLoop();
