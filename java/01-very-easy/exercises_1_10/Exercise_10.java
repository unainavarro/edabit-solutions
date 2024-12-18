package exercises_1_10;

/*
Area of a Triangle

Write a function that takes the base and height of a triangle and return its area.
Examples

triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

Notes

    The area of a triangle is: (base * height) / 2
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_10 {
    public static void main(String[] args) {
        System.out.println(triArea(3, 2));
        System.out.println(triArea(7, 4));
        System.out.println(triArea(10, 10));
    }

    public static int triArea(int base, int height) {
        return (base * height) / 2;
    }
}
