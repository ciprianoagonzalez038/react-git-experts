export const getGifts = async (categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zyMZt2Ye5UaCLNE4JEnIzuIpTi8OTzAj&q=${ encodeURI(categoria) }&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map(img => {
        return{
            id: img.id,
            title : img.title,
            image: img.images?.downsized_medium.url
        };
    });

    
    return gifts;
}