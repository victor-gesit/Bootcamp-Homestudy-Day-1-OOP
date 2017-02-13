function(){
	use 'strict';
	describe("Animal Class: Create an animal, make it talk", function(){
		it("The animal should be of type 'Living'", function(){

		});
		it("The animal should be of type 'Animal'", function(){

		});
		it("The animal sound should depend on it's name", function(){
			var animal = new Animal();
			var name = animal.name;
			if(name.toUpper() === 'DOG'){
				expect(animal.talk()).toEqual('Bark!');
			}
			if(name.toUpper() === 'CAT'){
				expect(animal.talk()).toEqual('Meow!');
			}
			if(name.toUpper() === 'COW'){
				expect(animal.talk()).toEqual('Moooow!');
			}
			if(name.toUpper() === 'LION'){
				expect(animal.talk()).toEqual('Roar!');
			}
			if(name.toUpper() === 'MONKEY'){
				expect(animal.talk()).toEqual('Whoop!')
			}
		});
		it("The animal should have")

	});
}