import "bootstrap";
import "bootstrap-css";
import { Editor } from "./src/utils/editor";
import { asyncDownloadFileDocx } from "./src/utils/downloadFileDocx";
import { asyncDocxToJson } from "./src/utils/docxToJson";
import { documentCreator } from "./src/utils/documentCreator";
import myCv from "./src/docxFiles/tex.docx";

const btnSaves = document.getElementById("btnExport");
const btnReset = document.getElementById("btnReset");
const btnImport = document.getElementById("btnImport");

let editor = Editor();
// функция которая будет создавать docx документ и вызываться при нажатии на кнопку "Экспортировать"
const editorDownloadFile = async () => {
  try {
    const { blocks } = await editor.save(); // берем данные из редактора
    console.log(blocks);
    const doc = documentCreator(blocks); // передаем данные в функцию которая будет создавать docx документ
    await asyncDownloadFileDocx("name", doc); // функция для загрузки документа в формате docx
  } catch (e) {
    console.log("error", e);
  }
};

async function onEditorSave() {
  try {
    const json = (await asyncDocxToJson(myCv)).map(({ children }) => children);
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

btnSaves.addEventListener("click", editorDownloadFile); // при нажатии на кнопку вызываем функцию которая будет скачать docx документ
btnReset.addEventListener("click", () => editor.clear()); // при нажатии на кнопку очистить вызываем функцию которая будет очищать редактор
btnImport.addEventListener("click", onEditorSave);
