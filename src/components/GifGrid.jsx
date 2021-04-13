
const GifGrid = ({gifRender}) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=b2PjivnhvJXps3cGiDwMVRRdYvSkcGHa';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
    }

    getGifs();

    return (
        <div>
            <h3>{gifRender}</h3>
        </div>
    )
}

export default GifGrid;
