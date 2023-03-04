package java_first_project;

public class Rectangle {
	private int width;
	private int height;
	public static int count;
	
	public Rectangle(int width) {
		this.width = width;
	}
	
	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}

	public int area() {
		return width * height;
	}
}
