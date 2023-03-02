package java_first_project;

import java.util.Scanner;

public class 조건문실습 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		// 조건문 실습1
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		switch (age/7) {
//		case 0:
//			System.out.println("유아");
//			break;
//		case 1:
//			System.out.println("초등학생");
//			break;
//		case 2:
//			if (age>13 && age<17) System.out.println("중학생");
//			else if (age>16 && age<20) System.out.println("고등학생");
//			else System.out.println("성인");
//			break;
//		default:
//			System.out.println("성인");
//		}
		
		// 조건문 실습2
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.next();
//		switch (name) {
//		case "홍길동":
//			System.out.println("남자");
//			break;
//		case "성춘향":
//			System.out.println("여자");
//			break;
//		default:
//			System.out.println("모르겠어요.");
//		}
		
		// 반복문 실습
		System.out.println("숫자를 입력하세요");
		int num = scanner.nextInt();
		for (int i=1; i<num+1; i++) System.out.print(i + " ");
	}
}
