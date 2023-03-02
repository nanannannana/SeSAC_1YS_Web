package java_first_project;
// ArrayList 가져옴
import java.util.ArrayList;
import java.util.Arrays;

public class Array {
	public static void main(String[] args) {
		// 1차원배열
		// 1. 배열 생성
		int[] intArray = {1,2,3,4,5};
		// 2. 배열 출력
		System.out.println("for문 활용");
		for (int i=0; i<intArray.length ; i++) {
			System.out.print(intArray[i] + " ");
		}
		System.out.println("");
		System.out.println("arrays 활용");
		System.out.println(Arrays.toString(intArray));
		
		System.out.println("for-each문 활용");
		for (int value: intArray) {
			System.out.print(value + " ");
		}
		System.out.println("");
		
		// 2차원 배열
		int[][] arr1 = {{0,1,2},{3,4,5}};
		int[][] arr2 = new int[2][3];
		
		System.out.println("arr1 valuer값 확인");
		for (int[] arr : arr1) {
			for (int value: arr) {
				System.out.print(value + " ");
			}
			System.out.println("");
		}
		
		System.out.println("arr2 valuer값 확인");
		// arr2에 값 추가
		int num = 0;
		for (int i=0; i<arr2.length ; i++) {
			for (int j=0; j<arr2[i].length ; j++) {
				arr2[i][j] = num;
				num++;
			}
		}
		// arr2 값 확인
		for (int[] arr: arr2) {
			for (int value: arr) {
				System.out.print(value + " ");
			}
			System.out.println("");
		}
		
		// ArrayList 수업
		// arr3 배열 생성
		ArrayList<Integer> arr3 = new ArrayList<>();
		
		// add 메서드: arraylist에 요소 추가
		// arr3 맨 뒤에 2 추가
		arr3.add(2);
		// 0번째 인덱스에 1추가
		arr3.add(0,1);
		
		// arr3 배열 확인
		System.out.println("arr3 값 확인/add 메서드 사용");
		for (int value: arr3) {
			System.out.print(value + " ");
		}
		System.out.println("");
		
		// arr4 배열 생성
		ArrayList<Integer> arr4 = new ArrayList<>();
		// arr4 배열에 값 추가(1~5)
		for (int i=1; i<6 ; i++) {
			arr4.add(i);
		}
		// addAll 메서드: ArrayList 뒤에 ArrayList추가
		arr4.addAll(arr4);
		System.out.println("arr4 값 확인/addAll 메서드 사용");
		for (int value: arr4) {
			System.out.print(value + " ");
		}
		System.out.println("");
		
		// size 메서드: 배열의 길이 (=length)
		System.out.println("arr3 값 확인/size,get 메서드 사용");
		for (int i=0; i<arr3.size() ; i++) {
			// get 메서드: 배열의 value값 추출 (=arr3[i])
			System.out.print(arr3.get(i) + " ");
		}
		// remove 메서드: n번째 인덱스 요소 제거
//		arr3.remove(1);
		// clear메서드: 요소 모두 제거
//		arr3.clear();
		System.out.println("indexOf 2: "+arr3.indexOf(2));
	}
}
