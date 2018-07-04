function Hypotrochoid(fixedRadius,rollingRadius,distance){
	this.fixedRadius = fixedRadius;//R
	this.rollingRadius = rollingRadius;//r
	this.distance = distance;//d
	this.angle = 0;
	this.path = "";
	this.x = 0;
	this.y = 0;
}
Hypotrochoid.prototype.move = function(endAngle){
	for(let i = 0; i < endAngle; i++){
		this.x = (this.fixedRadius-this.rollingRadius)*Math.cos(i*Math.PI/180) 
				+ this.distance * Math.cos((this.fixedRadius-this.rollingRadius)/this.rollingRadius * i * Math.PI/180);
		this.y = (this.fixedRadius-this.rollingRadius)*Math.sin(i*Math.PI/180) 
				- this.distance * Math.sin((this.fixedRadius-this.rollingRadius)/this.rollingRadius * i * Math.PI/180);
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