import { Packer } from "docx";
//import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";

export const asyncDownloadFileDocx = async (fileName, doc) => {
  const blob = await Packer.toBlob(doc);
  //const blob = await htmlDocx.asBlob(doc);
  await saveAs(blob, `${fileName}`);
};
