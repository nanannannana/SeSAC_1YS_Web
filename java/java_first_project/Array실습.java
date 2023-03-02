package java_first_project;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;

public class Array실습 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		// 배열 실습
//		int [] arr = new int[5];
//		int sum = 0;
//		System.out.println("5개의 정수를 입력하세요.");
//		for (int i=0; i<5; i++) {
//			// 입력한 값 5개가 arr 배열에 저장
//			arr[i] = scanner.nextInt();
//			sum += arr[i];
//		}
//		System.out.println("평균은 "+(double)sum/arr.length);
		
		// ArrayList 실습
		ArrayList<String> arr1 = new ArrayList<>();
		while (true) {
			System.out.println("문자를 입력해주세요: ");
			// next 메서드: 공백으로 문자 구분
			// nextLine 메서드: 줄바꿈으로 문자 구분
			String string = scanner.nextLine();
			if(string.equals("exit")) {
				for (String value: arr1) {
					System.out.println(value);
				}
				break;
			}
			arr1.add(string);
		}
	}
}
