import java.util.Scanner;

public class Challenge2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String tag = sc.nextLine();
        boolean isValid = true;
        int sum = Character.getNumericValue(tag.charAt(0));
        for (int i = 1; i < tag.length() - 1; i++) {
            char c = tag.charAt(i);
            if (Character.isDigit(c)) {
                int digit = Character.getNumericValue(c);
                sum += digit;
                if ((sum % 2) != 0) {
                    isValid = false;
                    break;
                }
                sum = digit;
            } else if (Character.isLetter(c)) {
                if (isVowel(c)) {
                    isValid = false;
                    break;
                }
            } else if (c != '-') {
                isValid = false;
                break;
            }
        }
        if ((sum + Character.getNumericValue(tag.charAt(tag.length() - 1))) % 2 != 0) {
            isValid = false;
        }

        if (isValid) {
            System.out.println("valid");
        } else {
            System.out.println("invalid");
        }
    }

    private static boolean isVowel(char c) {
        return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || c == 'Y';
    }
}
