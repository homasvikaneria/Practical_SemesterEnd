// Java/Box.java
class Box {
    double length, width, height;
    // No-argument 
    Box() {
        length = width = height = 5.0;
    }
    // One-argument
    Box(double side) {
        length = width = height = side;
    }
    // Parameterized constructor
    Box(double l, double w, double h) {
        length = l;
        width = w;
        height = h;
    }

    double volume() {
        return length * width * height;
    }
        public static void main(String[] args) {
        Box box1 = new Box();              
        Box box2 = new Box(5);             
        Box box3 = new Box(2, 3, 4);       

        System.out.println("Volume of box1: " + box1.volume());
        System.out.println("Volume of box2: " + box2.volume());
        System.out.println("Volume of box3: " + box3.volume());
    }
}

