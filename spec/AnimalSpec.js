(function(){
	'use strict';

	// Inheritance
	describe("Animal Class: Create an animal, make it talk", function(){
		it("The animal should be of type 'object' and an instance of the animal Class", function(){
			const cat = new Animal('cat');
			expect(typeof cat).toEqual(typeof {});
			expect(cat instanceof Animal).toBeTruthy();
		});
		
	});

	// Polymorphism
	describe("Animal should make sounds depending on it's name",function(){
		
		it("should bark it it's a dog", function(){
			const animal = new Animal('dog');
				expect(animal.talk().toUpper()).toEqual('BARK!');
		});
		it("should meow if it's a cat", function(){
			const animal = new Animal('cat');
			expect(animal.talk().toUpper()).toEqual('MEOW!');
		});
		it("Should moow if it's a cow", function(){
			const animal = new Animal('cow');
			expect(animal.talk().toUpper()).toEqual('MOOW!');
		});
		it("Should roar if it's a lion", function(){
			const animal = new Animal('dog');
			expect(animal.talk().toUpper()).toEqual('ROAR!');
		});
		it("Should whoop if it's a monkey", function(){
			const animal = new Animal('dog');
			expect(animal.talk().toUpper()).toEqual('WHOOP!');
		});
	})

	// Overloading
	describe("My favorite animal is a dog. If you don't specify, I'll make you a dog", function(){
		const animal = new Animal();
		it('Should bark', function(){
			expect(animal.talk().toUpper()).toEqual('BARK!');
		});
		it('Should be domestic', function(){
			expect(animal.domestic).toEqual(true);
		})
	})

	// Encapsulation
	describe("Some animals are domestic, others are not!", function(){
		it("A Lion is not domestic!", function(){
			const animal = new Animal('lion');
			expect(animal.domestic).toEqual(false);
		});
		it("A cat is safe to play with", function(){
			const animal = new Animal('cat');
			expect(animal.domestic).toEqual(true);
		})
	});
})();