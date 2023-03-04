package java_0304;

public class Animal_Prac {

	public static void main(String[] args) {
		Animal animal = new Animal();
		Dog dog = new Dog("강아지");
		dog.setName("뽀삐");
		dog.setAge(5);
		Cat cat = new Cat("고양이");
		cat.setName("또또");
		cat.setAge(3);
		animal.makeSound();
		dog.makeSound();
		cat.makeSound();
		System.out.println(dog.getSpecies()+dog.getName()+dog.getAge());
		System.out.println(cat.getSpecies()+cat.getName()+cat.getAge());
	}

}
