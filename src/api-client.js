const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=61955242c3a26781dded4aad87906f9b&format=json'


function getArtists() {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist =>{
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 200
            }
        }))
}

export { getArtists };