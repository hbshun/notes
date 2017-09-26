class Person{
    private String name;
    private int age;

    public void sA(int age){
        this.age = age;
    };
    Person(String s){
        this.name = s;
    }
}

class TestClass {
    public static void main(String[] args){
        Person p = new Person("bang");
        p.sA(12);
    }
}
