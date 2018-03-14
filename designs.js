// Define elements
const rows = document.querySelector('#inputHeight');
const cols = document.querySelector('#inputWidth');
const grid = document.querySelector('#pixelCanvas')

// Select color input
const currentColor = document.querySelector('#colorPicker');

//Color cells
function colorCellsOnClick() {
 	const td = this; //Using 'this' refers to the thing that the event happend to. Took me ages to find :)
 	td.style.backgroundColor = currentColor.value; // currentColor.value or randomColor()
  }

// Select size input
const sizeSubmit = document.querySelector('.button');
// When size is submitted by the user, call makeGrid()
sizeSubmit.addEventListener('click', makeGrid);

//Reset grid
function resetGrid() {
	sizeSubmit.removeEventListener('click', makeGrid);
}

function makeGrid(event) {
	// Clear grid
	resetGrid();
	// Create grid body
	const gridBody = document.createElement('tbody');
	//Create rows + columns
	for (let r = 1; r <= rows.value; r++) {
		const row = document.createElement('tr');
		for (let c = 1; c <= cols.value; c++) {
			const cell = document.createElement('td');
			row.appendChild(cell);
      		cell.onclick = colorCellsOnClick; //Adding onclick here made it all much easier https://www.w3schools.com/jsref/event_onclick.asp . Could also have used eventListener
		}
		gridBody.appendChild(row);
	}
	grid.appendChild(gridBody);
	event.preventDefault();
}

//Pointless but a fun addition
function randomColor() {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    //create the string that is the ‘random color’
    const randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

    return randomColor;
}
