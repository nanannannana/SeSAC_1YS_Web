package java_0304;

public class Main_Number {
	public static void main(String[] args) {
		// number는 non-static 멤버
		Number test = new Number();
		test.number = 2;
		
		// number2는 static 멤버
		Number test1 = new Number();
		test1.number2 = 3;
		Number.number2 = 10;
		
		// non-static 멤버 출력
		System.out.println(test.number);
		// static 멤버 출력
		System.out.println(test1.number2);
		System.out.println(Number.number2);
	}
}
