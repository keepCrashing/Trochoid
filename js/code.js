function exec(){
	let count = parseInt( $("#trochoidCount").text(), 10 );
	for(let i = 0; i <= count; i++){
		var h = new Hypotrochoid(document.getElementById("fixedRadius"+i).value,
			document.getElementById("rollingRadius"+i).value,
			document.getElementById("distance"+i).value);
		h.move(360);
	d3.select("svg")
	.append("path")
	.attr("id","path1")
	.attr("d",h.getPathAttributes().d)
	.attr("stroke",h.getPathAttributes().stroke)
	.attr("fill", h.getPathAttributes().fill)
	.attr("stroke-linecap",h.getPathAttributes().strokeLinecap)
	.attr("stroke-linejoin",h.getPathAttributes().strokeLinejoin);
	}

	/*var h1 = new Hypotrochoid(5,3,5);
	h1.move(1080);
	d3.select("svg")
	.append("path")
	.attr("id","path1")
	.attr("d",h1.getPathAttributes().d)
	.attr("stroke",h1.getPathAttributes().stroke)
	.attr("fill","yellow")
	.attr("stroke-linecap",h1.getPathAttributes().strokeLinecap)
	.attr("stroke-linejoin",h1.getPathAttributes().strokeLinejoin);*/

	var g = document.querySelector("#path1");
	var obbox = g.getBBox();
	d3.select("svg")
	.attr("viewBox",obbox.x +","+ obbox.y +","+ obbox.width +","+ obbox.height)
	.attr("preserveAspectRatio","xMinYMin meet");
}