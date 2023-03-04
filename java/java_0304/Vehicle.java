package java_0304;

public class Vehicle {
	private String name;
	private int wheelNum;
	public String getName() {
		return name;
	}
	
	public void isName() {
		System.out.println("어떤차량일까?");
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getWheelNum() {
		return wheelNum;
	}

	public void setWheelNum(int wheelNum) {
		this.wheelNum = wheelNum;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	private String color;
	
	public void explan(String name, int WheelNum, String color) {
		System.out.println("바퀴가 "+WheelNum+"개인 "+color+" "+name);
	}
}
