package java_0304;

public class Person {
	protected String name;
	private int age;
	
	// 메서드 오버라이딩
	// 부모클래스에서 정의한 test메서드
	public void test() {
		System.out.println("test");
	}
	
	// 메서드 오버로딩
	public Person() {
		System.out.println("사람 클래스의 인스턴스 생성됨");
	}
	public Person(String name, int age) {
		System.out.println("사람 클래스의 인스턴스 생성됨2");
		this.name = name;
		this.age = age;
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
	public void sleep() {
		System.out.println("10시에 잠자는 중");
	}
}
