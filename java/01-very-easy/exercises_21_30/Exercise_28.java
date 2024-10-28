package exercises_21_30;

/*
Multiple of 100
Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

Examples
divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

public class Exercise_28 {
    public static void main(String[] args) {
        System.out.println(divisible(1));
        System.out.println(divisible(1000));
        System.out.println(divisible(100));
    }

    public static boolean divisible(int number) {
        return number % 100 == 0;
    }
}
