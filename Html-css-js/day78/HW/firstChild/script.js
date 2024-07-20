const container = document.getElementById('container');
        const firstChild = container.firstChild;
        if (firstChild && firstChild.nodeType === Node.ELEMENT_NODE) {
            firstChild.textContent = 'First Modified';
        }