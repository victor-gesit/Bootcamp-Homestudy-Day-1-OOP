function Car(name='General', model = 'GM', type){
	this.type = type;
	this.model = model;
	this.name = name;
	this.numOfDoors = 4;
	if(type.toUpper() === 'PORSCHE' || type.toUpper === 'KOENIGSEGG'){
		this.numOfDoors = 2;
	}
	this.isSaloon = true;
	this.numOfWheels = 4;
	if(name.toUpper() === 'TRAILER'){
		this.numOfWheels = 8;
		this.isSaloon = false;
	}

}