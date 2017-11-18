// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {

	e.preventDefault();

	let table = "";

	let rows = Number($("#input_height").val());
	let cols = Number($("#input_width").val());

	if (rows > 100) {
		rows = 100;
	}

	if (cols > 100) {
		cols = 100;
	}

	for (let x = 0; x < rows; x++) {
		table += "<tr>";
		for (let y = 0; y < cols; y++) {
			table += "<td></td>";
		};
		table += "</tr>";
	}


	$("#pixel_canvas").html(table);

};

let painting = false;


function setPainting() {

	$("table").mousedown(function() {
		painting = true;
	})

	$("table").mouseup(function() {
		painting = false;
	})
}

function paintPixel(e) {

	let color = $("input[type=color]").val();

	setPainting();

	if (painting === true) {
		$(this).css("background-color", color);
	}

}

function clear() {
	$("td").each(function() {
		$(this).css("background-color", "white");
	})
}

function setBG() {
	$("td").each(function() {

		let color = $("input[type=color]").val();

		$(this).css("background-color", color);
	})
}


$("input[type=submit]").on("click", makeGrid);

$("table").on("mousemove", "td", paintPixel);

$("#clear").click(clear);

$("#setBG").click(setBG);


