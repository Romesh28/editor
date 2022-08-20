import JSZipUtils from "jszip-utils";
import mammoth from "mammoth";
import { parse } from "himalaya";

export const asyncDocxToJson = async (docxFileURL) => {
  const data = await JSZipUtils.getBinaryContent(docxFileURL);
  const html = await mammoth.convertToHtml({ arrayBuffer: data });
  const json = await parse(html.value);
  return json;
};
