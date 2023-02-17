
const tileWidth = 64;
const tileHeight = 64;
const screenWidth = 960;
const screenHeight = 960;


tilesX = screenWidth/tileWidth;
tilesY = screenHeight/tileHeight;
const totalTiles = tilesX*tilesY;
console.log("TilesX "+tilesX);
console.log("TilesX "+tilesY);
const boardDiv = document.querySelector('#board-div');

const rowDiv = document.createElement('div');
rowDiv.className="row-div";
boardDiv.appendChild(rowDiv);
for(let i = 0; i < tilesY; i++)
{
    const row = document.createElement('div');
    boardDiv.appendChild(row);
    for(let j = 0; j < tilesX; j++)
    {
        const column = document.createElement('div');
        column.className="column-div";
       // column.textContent = ".";
       // column.innerHTML = `<img src="." width="${tileWidth}" height="${tileHeight}"></img>`;
        column.style.width=tileWidth;
        column.style.border="2px solid black";
        row.appendChild(column);
    }
   

}

