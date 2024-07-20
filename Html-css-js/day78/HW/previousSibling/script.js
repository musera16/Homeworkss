const container = document.getElementById('container');
        const previousSibling = container.lastChild.previousSibling;
        if (previousSibling && previousSibling.nodeType === Node.ELEMENT_NODE) {
            previousSibling.textContent = 'Previous Modified';
        }