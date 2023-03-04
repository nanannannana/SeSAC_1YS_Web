package java_0304;

public class Main_Extends {

	public static void main(String[] args) {
		Person p = new Person("홍길동",10);
		Student s = new Student();
		s.setStudentID(10103);
		// 부모클래스에 있는 getter&setter도 자식클래스 인스턴스가 사용 가능
		s.setName("서새싹");
		System.out.println(p.getName()+p.getAge());
		System.out.println(s.getName()+s.getStudentID());
		
		// 메서드 오버라이딩
		p.sleep();
		s.sleep();
	}

}
