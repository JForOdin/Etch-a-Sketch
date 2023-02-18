

var paintOn = true; //user can toggle whether to draw or not by clicking mouse
var tileWidth = 16;  //initial resolution for pixels
var tileHeight = 16;
const smallBoardPixelSize = "8";  
const mediumBoardPixelSize = "12";
const largeBoardPixelSize = "16";
const screenWidth = 576; //determines how many tiles in the Y direction
const screenHeight = 768; //helps to determing how many tiles are in the X
var pixels = []; //an array of  pixels
var tilesX = screenWidth/tileWidth;  
var tilesY = screenHeight/tileHeight; 
const boardDiv = document.querySelector('#board-div'); //board div from index.html
const rowDiv = document.createElement('div'); //create a div for
rowDiv.className="row-div";
boardDiv.appendChild(rowDiv);

const eraseBoard = () => {
    for(let pixel of pixels)
    {
        pixel.style.backgroundColor = "lightgrey"
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
            column.style.width=tileWidth;
            column.style.height=tileHeight;
            column.style.outline = "0.5px solid dimgrey";
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


