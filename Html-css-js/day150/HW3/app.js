document.getElementById('fetchPackages').addEventListener('click', async () => {
    const response = await fetch('https://example.com/api/packages');
    const packages = await response.json();

    const list = document.getElementById('packagesList');
    list.innerHTML = '';
    packages.forEach(pkg => {
        const li = document.createElement('li');
        li.textContent = pkg.name;
        list.appendChild(li);
    });
});
