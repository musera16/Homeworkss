const container = document.getElementById('container');
        const lastChild = container.lastChild;
        if (lastChild && lastChild.nodeType === Node.ELEMENT_NODE) {
            lastChild.textContent = 'Last Modified';
        }