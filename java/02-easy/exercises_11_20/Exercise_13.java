package exercises_11_20;

/*
Convenience Store
Given a total due and an array representing the amount of change in your pocket, determine whether or not
 you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01
 */
public class Exercise_13 {
    public static void main(String[] args) {
        System.out.println(changeEnough(new int[]{2, 100, 0, 0}, 14.11));
        System.out.println(changeEnough(new int[]{0, 0, 20, 5}, 0.75));
        System.out.println(changeEnough(new int[]{30, 40, 20, 5}, 12.55));
        System.out.println(changeEnough(new int[]{10, 0, 0, 50}, 3.85));
        System.out.println(changeEnough(new int[]{1, 0, 5, 219}, 19.99));
    }

    public static boolean changeEnough(int[] change, double due) {
        double quarter = change[0] * 0.25;
        double dime = change[1] * 0.10;
        double nickel = change[2] * 0.05;
        double penny = change[3] * 0.01;

        return (quarter + dime + nickel + penny) >= due;
    }
}
