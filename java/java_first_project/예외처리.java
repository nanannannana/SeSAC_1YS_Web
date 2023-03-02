package java_first_project;

import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.ArrayList;
import java.util.Arrays;

public class 예외처리 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		// 예외처리1 - 숫자를 0으로 나누는 경우
//		int num1 = 5;
//		int num2 = 0;
//		
//		try {
//			System.out.println(num1/num2);
//		} catch (ArithmeticException e) {
//			System.out.println("0으로 나눌 수 없음");
//		} finally {
			// 예외 발생 여부와 상관없이 무조건 실행되는 문장
//			System.out.println("끝");
//		}
		
		// 예외처리2 - 정수를 입력받도록 작성한 코드에 문자열을 입력한 경우
//		try {
//			int num = scanner.nextInt();
//			System.out.println(num);
//		} catch (InputMismatchException e) {
//			System.out.println("error: 숫자만 입력 가능");
//		}
//		scanner.close();
		
		// 예외처리 실습
		int[] arr = new int[4];
		for (var i=0; i<arr.length ; i++) {
			arr[i] = i+1;
		}
		for (var i=0; i<5 ; i++) {
			try {
				System.out.println(arr[i]);
			} catch (ArrayIndexOutOfBoundsException e) {
				System.out.println("인덱스 범위 벗어남");
			}
		}
	}
}
