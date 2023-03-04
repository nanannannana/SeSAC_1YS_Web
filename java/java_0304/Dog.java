package java_0304;

public class Dog extends Animal {
	public void makeSound() {
		System.out.println("멍멍");
	}
	
	public Dog(String species) {
		this.species = species;
	}
}
