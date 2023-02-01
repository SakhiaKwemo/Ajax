const body = document.querySelector('body')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bfe67a554mshceb15b64d35113cp194d42jsnb609fe1b4d16',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?per_page=20&page=1', options)
	.then(response => response.json()) 
	.then(res => {
        console.log(res.chart_items)
        let artistArray = response.chart_items.map((e) => {
            return e.item
        })
        let newArtistArray = artistArray.map((e) => {
            return {image: e.image_url, name: e.name}
        })
        newArtistArray = newArtistArray.filter((e, index) => {
            return index !== 0 && index !== 1
        })
        console.log(newArtistArray)
        newArtistArray.forEach((e, index) => {
            body.innerHTML += `
            <div>
            <h1>${index +1}</h1>
            <div>
            <img style="height: 200px"src="${e.image}"/>
            <h1>${e.name}</h1>
            <div>
            <div>
        `
        })


    }
    )
	.catch(err => console.error(err));