const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

let intervalId;
const startChangingColor = () => {

    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector("#Start").addEventListener("click", startChangingColor);
document.querySelector("#Stop").addEventListener("click", stopChangingColor);

