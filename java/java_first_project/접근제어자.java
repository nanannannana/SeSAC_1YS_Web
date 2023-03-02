package java_first_project;

import test.Hello;
import java.util.Scanner;
import java.util.ArrayList;

public class 접근제어자 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
//		Hello hello1 = new Hello();
//		hello1.hello();
//		Person person = new Person();
//		// setter를 사용하여 name값 할당
//		person.setName("서새싹");
//		// getter를 사용하여 name값 출력
//		System.out.println(person.getName());
		
		// 접근제어자 실습
		ArrayList<Rectangle> rect = new ArrayList<>();
		while (true) {
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요");
			// 사용자가 작성한 가로, 세로 길이 스캔
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			// rectangle 클래스에 값 보냄
			Rectangle rectangle = new Rectangle(width);
			rectangle.setHeight(height);
			// arraylist에 데이터 삽입
			rect.add(rectangle);
			if (width==0 && height==0) {
				for (int i=0 ; i<rect.size()-1 ; i++) {
					System.out.println("가로길이: "+rect.get(i).getWidth());
					System.out.println("세로길이: "+rect.get(i).getHeight());
					System.out.println("넓이는: "+(rect.get(i).getWidth()*rect.get(i).getHeight()));
					System.out.println("----------");
				}
				break;
			}
		}
	}
}
