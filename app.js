console.log("Let's get this party started!");
// const apiKey = {api_key: 'EhOvBtFxGzKUs1ejunExMXVTRjIvOTAH'};


async function findGiph(searchWord) {
    const findGif = await axios.get('https://api.giphy.com/v1/gifs/search', { params: {
        api_key: 'EhOvBtFxGzKUs1ejunExMXVTRjIvOTAH',
        q: searchWord
        }
    });
    console.log(findGif);
    const ranIdx = Math.floor(Math.random() * findGif.data.data.length);
    const imgURL = findGif.data.data[ranIdx].images.original.url;
    console.log(imgURL);
    const newImg = document.createElement('img');
    newImg.src = `${imgURL}`;
    gallery.append(newImg);
    
}

const addSearch = document.querySelector('.add');
const searchTerm = document.querySelector('input');
const gallery = document.querySelector('.giphs');

addSearch.addEventListener('click', function(e){
    e.preventDefault();
    findGiph(searchTerm.value);
}); 

$('.delete').on('click', function(){
    $('.giphs').empty();
});

