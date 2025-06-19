function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content);
    const paddingSize = parseInt(padding);
    const borderSize = parseInt(border);
    return contentWidth + paddingSize * 2 + borderSize * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
