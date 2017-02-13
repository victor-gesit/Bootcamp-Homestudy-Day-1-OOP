module.exports = function(name) {
	this.name = name;
	if(name === undefined){
		this.name = 'dog';
		this.sound = 'bark!';
	}
	this.name = this.name.toLowerCase();

	// Assign sound an domestication based on name
	switch(this.name){
		case 'dog':
			this.domestic = true;
			this.sound = 'Bark!';
			break;
		case 'cat':
			this.domestic = true;
			this.sound = 'Meow!';
			break;
		case 'cow':
			this.domestic = true;
			this.sound = 'Moow!'
			break;
		case 'lion':
			this.domestic = false;
			this.sound = 'Roar!';
			break;
		case 'monkey':
			this.domestic = false;
			this.sound = 'Whoop!';
			break;
		default:
			this.domestic = 'unknown';
			this.sound = 'unknown';
	}

	// Make it talk
	this.talk = function(){
		return this.sound.toUpperCase();
	}

};