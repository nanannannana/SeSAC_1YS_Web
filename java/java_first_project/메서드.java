package java_first_project;

public class 메서드 {
	public static void hello() {
		System.out.println("hello");
	}
	public static int sum(int num1, int num2) {
		return num1+num2;
	}
	public static void main(String[] args) {
		hello();
		System.out.println(sum(1,2));
	}
}
