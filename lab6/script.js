let btn = document.getElementById('btn');
let url_from = 'https://randomuser.me/api'

function fillCard(data) {
    let card = ''
    for(let idx in data.results) {
        card += '<div class="card">'
            +'<img alt="photo" src="'+data.results[idx].picture.thumbnail+'">'
            + '<div><b>Postcode</b>: '+data.results[idx].location.postcode+'</div>'
            + '<div><b>Coords</b>: '+data.results[idx].location.coordinates.latitude+','+data.results[idx].location.coordinates.longitude+'</div>'
            + '<div><b>Email</b>: '+data.results[idx].email+'</div>'
            + '<div><b>City</b>: '+data.results[idx].location.city+'</div>'
            +'</div>'
    }
    document.getElementById('cards').innerHTML += card;
}

btn.addEventListener('click', () => {
    fetch(url_from)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            fillCard(data)
        });
})
