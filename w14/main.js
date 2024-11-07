function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getPhotos(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log("Error", error)
    }
}

async function start(url) {
    const photos = await getPhotos(url);
    renderPhotos(photos);
}

start("https://jsonplaceholder.typicode.com/photos");
//start("https://error.bad");