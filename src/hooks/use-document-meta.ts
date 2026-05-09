import { useEffect } from "react";

type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(selector: string, attrName: string, attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentMeta({ title, description, ogTitle, ogDescription }: Meta) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "name", "description", description);
    if (ogTitle) setMeta('meta[property="og:title"]', "property", "og:title", ogTitle);
    if (ogDescription) setMeta('meta[property="og:description"]', "property", "og:description", ogDescription);
  }, [title, description, ogTitle, ogDescription]);
}
