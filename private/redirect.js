import { auth } from "../public/meta.js";

export const server = (document, options) => {
  if (auth(options.req.cookies.pwd)) options.res.redirect("main");
  else options.res.redirect("login");
};
