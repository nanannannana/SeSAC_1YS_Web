package java_0304;

public class Cat extends Animal {
	public void makeSound() {
		System.out.println("냐옹");
	}
	
	public Cat(String species) {
		this.species = species;
	}
}
