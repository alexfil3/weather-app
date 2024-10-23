const URL = 'https://api.giphy.com/v1/gifs/translate';
const KEY = 'eN6NyIaHV0yLeLR9rZXKaGQuWn7gu9yE';

async function getCatIcon() {
    try {
        const resp = await fetch(`${URL}?api_key=${KEY}&s=cat`);
        const data = await resp.json();
        const catIcon = data.data.images.original.url;

        if (!resp.ok) {
            console.log("Something went wrong");
        }
        
        return catIcon;
    } catch (error) {
        console.log(error.message);
    }
}

export default getCatIcon;