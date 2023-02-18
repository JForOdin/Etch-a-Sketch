

var paintOn = true;
var tileWidth = 16;
var tileHeight = 16;
const smallBoardPixelSize = "8";
const mediumBoardPixelSize = "12";
const largeBoardPixelSize = "16";
const screenWidth = 576; //36
const screenHeight = 768; //48
var pixels = [];
var tilesX = screenWidth/tileWidth;  //
var tilesY = screenHeight/tileHeight; //24
const totalTiles = tilesX*tilesY;
const boardDiv = document.querySelector('#board-div');
const rowDiv = document.createElement('div');
rowDiv.className="row-div";
boardDiv.appendChild(rowDiv);

const eraseBoard = () => {
    for(let pixel of pixels)
    {
        pixel.style.backgroundColor = "lightgrey"
        pixel.style.border="1px solid dimgrey";
    }
}
const changeSmallBoard = () => {
    createBoard(smallBoardPixelSize,smallBoardPixelSize);
   for(let pixel of pixels)
    {
        pixel.style.height = "8px";
        pixel.style.width = "8px";

    } 
}
const changeMediumBoard = () => {
    console.log("Changing to small resolution");

    createBoard(mediumBoardPixelSize,mediumBoardPixelSize);
    for(pixel of pixels)
    {
        pixel.style.width="12px";
        pixel.style.height="12px";
    }
}
const changeLargeBoard = () => {
    console.log("Changing to Large resolution");
  /*  eraseBoard();
    for(let pixel of pixels)
    {
        pixel.style.height = "16px";
        pixel.style.width = "16px";
        
    }*/
    
    createBoard(16,16);
}

const paint = () => {
    if(paintOn)
        paintOn=false;
    else
        paintOn=true;
}
///create board below
const createBoard = (tileWidth,tileHeight) => 
{   
    //need to clear all the children from the boardDiv
    var boardDivChildren = document.getElementById("board-div");
    let child = boardDivChildren.firstElementChild;
    while(child)
    {
        boardDiv.removeChild(child);
        child = boardDivChildren.firstElementChild;
    }
    ////////

    ///Calculate number of tiles in X axis and Y axis
    tilesX = screenWidth/tileWidth;
    tilesY = screenHeight/tileHeight;
    console.log("Tiles X: "+tilesX);
    console.log("Tile Y: "+tilesY);
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
            column.style.height=tileHeight;
            //column.style.height=tileHeight;

         //   column.style.border="1px solid dimgrey";
            column.style.outline = "1px solid dimgrey";
            row.appendChild(column);
            pixels.push(column);
        }
    }
    /// used to decide when a pixel should change color
    pixels.forEach(element => {
        element.addEventListener('mouseover', () => {
           // element.style.backgroundColor = "dimgrey";
           paintPixel(element);
           
        });
    });
}

const paintPixel = (element) => {
    if(paintOn) 
        element.style.backgroundColor = "dimgrey";
  /*  if(element.clicked==true)
       {
           console.log("already painted");
           element.style.backgroundColor = "black";

       }
    element.clicked = true; */

}
createBoard(largeBoardPixelSize,largeBoardPixelSize);


