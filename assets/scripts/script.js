const display = document.querySelector('#links');

const linkUsed = {
    "Tempat Pamer &#128526;":[
        ["My Youtube Channel Trailer","https://www.youtube.com/watch?v=W_czMS95ngY"],
        ["GitHub Profile","https://github.com/hannoobz"],
        ["Steam Profile","https://steamcommunity.com/id/hannoobz/"],
    ],
    "Not My Social Media":[
        ["Instagram","https://www.instagram.com/ridwankamil"],
        ["X","https://twitter.com/jokowi"],
    ],
    "Gatau Ga Jelas &#128128;":[
        ["2 3","https://twitter.com/gibran_tweet"],
        ["fav song (not rickroll fr fr nocap)","https://www.youtube.com/watch?v=BnkhBwzBqlQ"],
    ],
}
const linkUsedArr = Object.values(linkUsed);
const sectionName = Object.keys(linkUsed);

const displayLinks = (arr,keys) => {
    display.innerHTML += `<h2 class="sectionname">${keys}</h2>
    `
    display.innerHTML += `<ul>`
    let displayLink = arr.map((object) => {
        const text = object[0];
        const link = object[1];
        return `
        <li>
            <a href="${link}" target='_blank' id="link-added">${text}</a>
        </li>
        `
    }).join("");
    display.innerHTML += displayLink;
    display.innerHTML += `</ul>`
}

for(let i=0;i<linkUsedArr.length;i++){
    displayLinks(linkUsedArr[i],sectionName[i]);
}
