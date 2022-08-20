import { Document, HeadingLevel, Paragraph, TextRun } from "docx";

export const documentCreator = (blocks) =>
  new Document({
    sections: [
      {
        children: blocks.map((block) => {
          switch (block.type) {
            case "header":
              return new Paragraph({
                text: block.data.text,
                heading: HeadingLevel[`HEADING_${block.data.level}`],
              });
            case "list":
              return new Paragraph({
                children: block.data.items.map(
                  (item, i) =>
                    new TextRun(
                      `${
                        block.data.style === "ordered" ? `${i + 1}. ` : "- "
                      }${item}`
                    )
                ),
              });
            default:
              return new Paragraph(block.data.text);
          }
        }),
      },
    ],
  });
