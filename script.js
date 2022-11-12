
/**
 * Generates a random color and sets the background color of the page to that color.           
 * @returns None           
 */
let ColorGenerator = () => {
    let a = Math.floor(Math.random() * 245 + 1);
    let b = Math.floor(Math.random() * 245 + 1);
    let c = Math.floor(Math.random() * 245 + 1);
    let colorGiven = (document.body.style.backgroundColor =
        "rgb(" + a + "," + b + "," + c + ")");
    document.getElementById("Color").innerHTML = colorGiven;
};
document.getElementById("btn").addEventListener("click", () => {
    ColorGenerator();
});
// Generates a color generator based on the screen size.
ColorGenerator();
/**
 * Changes the font size of the color text based on the screen width.       
 * @param {number} [w=screen.width] - the width of the screen.       
 * @returns None       
 */
let w = screen.width;
if (screen.width < 426) {
    document.getElementById('Color').style.fontSize ="20px";
}
if (screen.width <= 320) {
    document.getElementById('btn').style.minWidth ="4em";
    document.getElementById('btn').style.fontSize ="20px";
}