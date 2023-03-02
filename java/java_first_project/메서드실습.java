package java_first_project;

import java.util.Scanner;

public class 메서드실습 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		// 메서드 실습
		System.out.println("숫자 두 개를 입력하세요.");
		double num1 = scanner.nextDouble();
		double num2 = scanner.nextDouble();
		System.out.println("덧셈 결과: "+plus(num1,num2));
		System.out.println("뺄섬 결과: "+minus(num1,num2));
		System.out.println("나눗셈 결과: "+division(num1,num2));
		System.out.println("곱셈 결과: "+multi(num1,num2));
	}
	public static double plus(double num1, double num2) {
		return num1+num2;
	}
	public static double minus(double num1, double num2) {
		return num1-num2;
	}
	public static double division(double num1, double num2) {
		return num1/num2;
	}
	public static double multi(double num1, double num2) {
		return num1*num2;
	}
}
