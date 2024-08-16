var photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"], i = 0;
function changePhoto(dir) {
    i = (i + dir + photos.length) % photos.length;
    document.getElementById('photo').src = photos[i];
}
