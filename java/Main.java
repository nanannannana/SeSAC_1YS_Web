package java_first_project;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 수업
//		System.out.println("Hello World");
//		System.out.print("Hello World");
		Scanner scanner = new Scanner(System.in);
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean single = scanner.nextBoolean();
//		
//		scanner.close();
//		
//		System.out.println("이름은 " + name);
//		System.out.println("나이는 " + age);
//		System.out.println("키는 " + height);
//		System.out.println("결혼 여부는 " + single);
		
//		// 실습
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.next();
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		scanner.close();
//		System.out.println("안녕하세요! "+name+"님("+age+"세)");
		
		// if문
//		String str = new String("홍길동");
//		String str2 = "홍길동";
//		
//		if (str2 == "홍길동") System.out.println(true);
//		else System.out.println(false);
		
		// switch문
//		int num = 0;
//		switch (num) {
//		case 0:
//			System.out.println("0");
//			break;
//		case 1:
//			System.out.println("1");
//			break;
//		default:
//			System.out.println("0도 1도 아님");
//		}
		
		// for문
//		for (int i=0; i<10; i++) {
//			System.out.println(i);
//		}
		
		// while문
//		int i = 10;
//		while (i<10) {
//			System.out.println("i: "+i);
//			i++;
//		}
//		
		// do-while문
//		int j = 10;
//		do {
//			System.out.println("j: "+j);
//			j++;
//		} while (j<10);
		
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
//		System.out.println("숫자를 입력하세요");
//		int num = scanner.nextInt();
//		for (int i=1; i<num+1; i++) System.out.println(i);
		
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
	//메서드
//	public static void hello() {
//		System.out.println("hello");
//	}
//	public static int sum(int num1, int num2) {
//		return num1+num2;
//	}
//	public static void main(String[] args) {
//		hello();
//		System.out.println(sum(1,2));
//	}

}

