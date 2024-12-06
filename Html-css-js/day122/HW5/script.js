document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.item').forEach(i => {
            i.style.backgroundColor = ''; // დააბრუნე საწყისი ფერი
        });
        item.style.backgroundColor = '#a6a9b0'; // ღია ნაცრისფერი
    });
});
