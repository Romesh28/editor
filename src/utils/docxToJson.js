import PizZip from "pizzip";
import DocXTemplater from "docxtemplater";


export const asyncDocxToJson = async (docxFileURL) => {
    const getDocxBuffer =  (content) =>{
        let zip = new PizZip(content);
        let doc = new DocXTemplater(zip);
        doc.render();
        console.log(doc)
        return doc.compiled["word/document.xml"].parsed;
    }

    const resultFile = async () =>{
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(docxFileURL);
        const xmlJson = await new Promise(resolve=>{
            fileReader.onloadend=()=>{
                resolve(getDocxBuffer(fileReader.result))
            }
        });

        return xmlJson;
    }

    return resultFile();
};
