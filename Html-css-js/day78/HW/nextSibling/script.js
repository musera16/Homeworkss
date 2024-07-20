const container = document.getElementById('container');
        const nextSibling = container.firstChild.nextSibling;
        if (nextSibling && nextSibling.nodeType === Node.ELEMENT_NODE) {
            nextSibling.textContent = 'Next Modified';
        }