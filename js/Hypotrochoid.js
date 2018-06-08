function Hypotrochoid(outerRadius,innerRadius,distance){
	this.outerRadius = outerRadius;//R
	this.innerRadius = innerRadius;//r
	this.distance = distance;//d
	this.angle = 0;
	this.path = "";
	this.x = 0;
	this.y = 0;
}
Hypotrochoid.prototype.move = function(endAngle){
	for(let i = 0; i < endAngle; i++){
		this.x = (this.outerRadius-this.innerRadius)*Math.cos(i*Math.PI/180) 
				+ this.distance * Math.cos((this.outerRadius-this.innerRadius)/this.innerRadius * i * Math.PI/180);
		this.y = (this.outerRadius-this.innerRadius)*Math.sin(i*Math.PI/180) 
				- this.distance * Math.sin((this.outerRadius-this.innerRadius)/this.innerRadius * i * Math.PI/180);
		if(i==0){
			this.path += "M " + this.x + " " + this.y + " ";
		}
		this.path += "L " + this.x + " " + this.y + " ";
		
	}
}
Hypotrochoid.prototype.getPathAttributes = function(){
	return{
		"d" : this.path,
		"stroke" : "black",
		"fill" : "none",
		"strokeLinecap" : "round",
		"strokeLinejoin" : "round"
	};
}