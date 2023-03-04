package java_0304;

public class Student extends Person {
	// Person 클래스의 상속을 받았기 때문에 Person클래스의 필드와 메서드 사용 가능
	private int studentID;
	
	// 메서드 오버라이딩
	// 자식클래스에서 재정의한 test/sleep메서드
	public void test() {
		System.out.println("student test");
	}
	public void sleep() {
		System.out.println("11시에 잠자는 중");
	}
	
	public Student() {
		// 자식클래스 생성자 맨 첫줄에 부모클래스 생성자를 위치시킴(=자식클래스 생성자의 내용이 실행되기 전 부모클래스 생성자가 실행됨)
		// super(); // 매개변수가 없는 부모클래스 생성자 호출
		// super("홍길동",10); // 해당 매개변수를 받는 부모클래스 생성자 호출
		
		// name은 protected
		// protected는 자식 클래스 혹은 같은 클래스 내에서 접근 가능
		this.name = "서새쑥";
		// age는 private
		// private는 같은 클래스 내에서만 접근 가능(=Person 클래스에서만 접근 가능)
		// this.age = 88;
		
		System.out.println("Student 생성자 실행됨");
	}
	
	public int getStudentID() {
		return studentID;
	}

	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}

	public void study( ) {
		System.out.println("공부하는 중");
	}
}
