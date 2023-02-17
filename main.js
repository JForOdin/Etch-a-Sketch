
const tileWidth = 32;
const tileHeight = 32;
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
        column.style.width=tileWidth;
        row.appendChild(column);
    }
}
 /*for(let i = 0; i < totalTiles;i++)
{
 
   
    for(let j = 0; j < tilesY; j++)
    {
        const div = document.createElement('div');

        div.textContent = "H";
        div.style.color = 'blue';
        div.style.width=tileWidth;
        div.style.height=tileHeight;                                     
        boardDiv.appendChild(div);
        
    } 
}  */
