export const getGifs = async ( { title, quantity }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bgrseqKI4z3Fpbmb13Ukh29d4IDPeHak&q=${ title }&limit=${ quantity }`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}    