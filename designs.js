// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {

	e.preventDefault();

	let table = "";

	let rows = Number($("#input_height").val());
	let cols = Number($("#input_width").val());

	for (let x = 0; x < rows; x++) {
		table += "<tr>";
		for (let y = 0; y < cols; y++) {
			table += "<td></td>";
		};
		table += "</tr>";
	}


	$("#pixel_canvas").html(table);

};

function paintPixel() {
	let color = $("input[type=color]").val();

	$(this).css("background-color", color);
}



$("input[type=submit]").on("click", makeGrid);
$("table").on("click", "td", paintPixel);
