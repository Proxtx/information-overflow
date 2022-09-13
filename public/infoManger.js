import fs from "fs/promises";

let infoClasses = [];

export const getInfo = async () => {
  let build = [];
  for (let infoObject of infoClasses) {
    build.push({
      element: "info-io",
      name: infoObject.class.name ? infoObject.class.name : infoObject.name,
      contains: await infoObject.class.info(),
    });
  }
  return {
    build,
  };
};

const init = async () => {
  let modules = await fs.readdir("plugins");
  for (let module of modules) {
    infoClasses.push({
      class: new (await import("../plugins/" + module + "/main.js")).Info(),
      name: module,
    });
  }
};

init();
