import getCatIcon from "./getCatIcon";

async function setAvatar() {
    const avatar = document.querySelector('.avatar');
    const catAvatar = await getCatIcon();
    
    if (catAvatar) {
        avatar.src = catAvatar;
    }
}

export default setAvatar;