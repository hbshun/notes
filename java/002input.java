import java.util.Scanner;

class GetInput {
    public static void main(String[] args){
        System.out.println("Enter your name, please:");
        Scanner myVar = new Scanner(System.in);
        System.out.println("Hello, " + myVar.nextLine() + "!");
//        System.out.println(myVar.getLine);
    }
}
