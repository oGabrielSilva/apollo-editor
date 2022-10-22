type Attributes = { attribute: string; value: string };
export type Html = {
  element: string;
  attributes?: Attributes[];
  textContent?: string;
  children?: Html[];
};

const createChild = (
  child: string,
  att?: Attributes[],
  textContent?: string,
  children?: Html[]
) => {
  const c = document.createElement(child);
  if (!!att && !!att.length)
    att.forEach((a) => c.setAttribute(a.attribute, a.value));

  if (!!textContent) c.textContent = textContent;
  if (!!children && !!children.length) {
    children.forEach((ch) => {
      c.appendChild(
        createChild(ch.element, ch.attributes, ch.textContent, ch.children)
      );
    });
  }
  return c;
};

export const html = (tag: Html): HTMLElement => {
  const element = document.createElement(tag.element);
  const { children, attributes, textContent } = tag;
  if (!!attributes && !!attributes.length)
    attributes.forEach((att) => element.setAttribute(att.attribute, att.value));

  if (!!textContent) element.textContent = textContent;

  if (!!children && !!children.length) {
    children.forEach((child) => {
      element.appendChild(
        createChild(
          child.element,
          child.attributes,
          child.textContent,
          child.children
        )
      );
    });
  }
  return element;
};
