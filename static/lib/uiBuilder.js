export const build = (obj) => {
  let elem = document.createElement(obj.element);
  for (let attribute in obj) {
    if (["element", "contains"].includes(attribute)) continue;
    elem.setAttribute(attribute, obj[attribute]);
  }

  if (obj.contains)
    if (!Array.isArray(obj.contains)) elem.appendChild(build(obj.contains));
    else for (let content of obj.contains) elem.appendChild(build(content));

  return elem;
};

/*document.body.appendChild(
  build({
    element: "info-io",
    name: "Service",
    contains: {
      element: "title-box-io",
      title: "test",
      contains: {
        element: "box-io",
        contains: {
          element: "text-io",
          text: "[test-1234] Hallo 1234",
          color: "var(--greyColor)",
          size: "90%",
        },
      },
    },
  })
)*/
