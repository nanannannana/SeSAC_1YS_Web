package java_first_project;

public class Person {
	// 필드(변수)
	private String name;
	private int age;
	
	// 생성자
//	public Person(String name, int age) {
//		System.out.println("welcome");
//		// 필드 값 할당
//		// 필드명에는 this붙임
//		this.name = name;
//		this.age = age;
//	}
	
	// 메서드
	public void myname() {
		System.out.println("name: " + name);
		System.out.println("age: " + age);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
