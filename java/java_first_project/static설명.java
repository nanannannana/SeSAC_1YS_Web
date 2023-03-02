package java_first_project;

import java.lang.Math;

public class static설명 {
	public static void main(String[] args) {
		Number number1 = new Number();
		Number number2 = new Number();
		
		number1.num1 = 1;
		number1.num2 = 1;
		
		System.out.println("static num1: "+Number.num1);
		System.out.println("static num1: "+number2.num1);
		System.out.println("non-static num2: "+number2.num2);
		
		// static 활용 예시 - Math 클래스
		// 객체를 생성하지 않아도 접근 가능
		System.out.println("Math 클래스: "+Math.abs(-10));
	}
}
