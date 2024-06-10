const originalTitle = document.title;
const logo = "./assets/imgs/img/picc.png";
const sad = "./assets/imgs/img/comeBack.png";

const changeFavicon = (src) => {
    const link = document.getElementById("favicon");
    if (link) {
        link.href = src;
    } else {
        const newLink = document.createElement('link');
        newLink.id = 'favicon';
        newLink.rel = 'icon';
        newLink.href = src;
        document.head.appendChild(newLink);
    }
};

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Come back";
        changeFavicon(sad);
    } else {
        document.title = originalTitle;
        changeFavicon(logo);
    }
});
