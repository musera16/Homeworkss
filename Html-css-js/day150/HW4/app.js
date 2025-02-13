document.getElementById('fetchCars').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/cars');
    const cars = await response.json();

    const list = document.getElementById('carsList');
    list.innerHTML = '';
    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = `${car.brand} ${car.model} (${car.year}) - ${car.price} ₾`;
        list.appendChild(li);
    });
});
