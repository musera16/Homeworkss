document.getElementById('fetchComputers').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/computers');
    const computers = await response.json();

    const list = document.getElementById('computersList');
    list.innerHTML = '';
    computers.forEach(computer => {
        const li = document.createElement('li');
        li.textContent = `${computer.brand} ${computer.model} - ${computer.specs} - ${computer.price} ₾`;
        list.appendChild(li);
    });
});
