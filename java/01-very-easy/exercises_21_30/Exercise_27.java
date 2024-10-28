package exercises_21_30;

/*
Using the "&&" Operator
Java has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.

Make a function using the && operator.

Examples
and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false
Notes
N/A
 */
public class Exercise_27 {
    public static void main(String[] args) {
        System.out.println(and(true, false));
        System.out.println(and(true, true));
        System.out.println(and(false, true));
        System.out.println(and(false, false));
    }

    public static boolean and(boolean bool1, boolean bool2) {
        return bool1 && bool2;
    }
}
