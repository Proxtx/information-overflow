let meta = await framework.load("meta.js");

const password = document.getElementById("password");
password.addEventListener("change", async () => {
  if (await meta.auth(password.component.value)) {
    cookie.pwd = password.component.value;
    location.pathname = "/main";
  } else {
    password.component.value = "";
  }
});
