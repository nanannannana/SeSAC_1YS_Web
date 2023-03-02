package java_first_project;

public class 조건문 {
	public static void main(String[] args) {
		// if문
		String str = new String("홍길동");
		String str2 = "홍길동";
		System.out.println("if문 console");
		if (str2 == "홍길동") System.out.println(true);
		else System.out.println(false);
		
		// switch문
		int num = 0;
		System.out.println("switch문 console");
		switch (num) {
		case 0:
			System.out.println("0");
			break;
		case 1:
			System.out.println("1");
			break;
		default:
			System.out.println("0도 1도 아님");
		}
		
		// for문
		System.out.println("for문 console");
		for (int i=0; i<10; i++) {
			System.out.print(i + " ");
		}
		System.out.println("");
		
		// while문
		System.out.println("while문/do-while문 console");
		int i = 10;
		while (i<10) {
			System.out.println("i: "+i);
			i++;
		}
		
		// do-while문
		int j = 10;
		do {
			System.out.println("j: "+j);
			j++;
		} while (j<10);
	}
}
