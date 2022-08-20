export const documentCreatorHTML = (blocks) => {
    let htmlBlocks = ``;
    blocks.forEach((block) => {
        switch (block.type) {
            case "header":
                htmlBlocks += heading(block.data.text, block.data.level);
                break;
            case "list":
                htmlBlocks += list(block.data.items, block.data.style);
                break;
            default:
                htmlBlocks += `<p>${block.data.text}</p>`;
        }
    });
    return htmlBlocks;
};

function heading(text, level) {
    return `<h${level}>${text}</h${level}>`;
}

function list(items, style) {
    if (style === "ordered") {
        return `<ol>${items.map((item, i) => `<li>${item}</li>`).join("")}</ol>`;
    }
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}
