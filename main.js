
const tileWidth = 16;
const tileHeight = 16;
const screenWidth = 576;
const screenHeight = 768;
const pixels = [];
const tilesX = screenWidth/tileWidth;  //
const tilesY = screenHeight/tileHeight; //24
const totalTiles = tilesX*tilesY;
const boardDiv = document.querySelector('#board-div');
const rowDiv = document.createElement('div');
rowDiv.className="row-div";
boardDiv.appendChild(rowDiv);

function changeLargeBoard() {
    console.log("Changing to large resolution");
}
function changeMediumBoard() {
    console.log("Changing to medium resolution");
}
function changeSmallBoard() {
    console.log("Changing to small resolution");
}


for(let i = 0; i < tilesY; i++)
{
    const row = document.createElement('div');
    boardDiv.appendChild(row);
    for(let j = 0; j < tilesX; j++)
    {
        const column = document.createElement('div');
        column.className="column-div";
       // column.innerHTML = `<img src="." width="${tileWidth}" height="${tileHeight}"></img>`;
        column.style.width=tileWidth;
        column.style.border="1px solid dimgrey";
        row.appendChild(column);
        pixels.push(column);
    }
}
const paintPixel = (element) => {
    element.style.backgroundColor = "dimgrey";
 /*   if(element.clicked==true)
       {
           console.log("already painted");
           element.style.backgroundColor = "black";

       }
    element.clicked = true;*/

}
pixels.forEach(element => {
    element.addEventListener('mouseover', () => {
       // element.style.backgroundColor = "dimgrey";
       paintPixel(element);
       
    });
});

