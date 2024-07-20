const container = document.getElementById('container');
const childNodes = container.childNodes;
childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        node.textContent = 'Modified';
    }
});