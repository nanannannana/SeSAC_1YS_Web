package java_0304;

public class Vehicle_Prac {
	public static void main(String[] args) {
		Vehicle vehicle = new Vehicle();
		vehicle.isName();
		
		Bus bus = new Bus();
		bus.setName("버스");
		bus.setColor("노란색");
		bus.setWheelNum(6);
		Car car = new Car();
		car.setName("차");
		car.setWheelNum(4);
		car.setColor("빨간색");
		
		bus.isName();
		bus.explan(bus.getName(), bus.getWheelNum(), bus.getColor());
		car.isName();
		car.explan(car.getName(), car.getWheelNum(), car.getColor());
	}
}
