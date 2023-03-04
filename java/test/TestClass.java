package test;

public class TestClass {
	// protected는 다른 패키지여도 부모-자식 관계라면 자식클래스에서 접근 가능
	protected int n;
	// default 접근제어자 생략 가능
	// default는 다른 패키지라면 부모-자식 관계라도 자식클래스에서 접근 불가
	// 같은 패키지 내에서 부모-자식 관계일 경우, 자식클래스에서 접근 가능
	int n2;
}
