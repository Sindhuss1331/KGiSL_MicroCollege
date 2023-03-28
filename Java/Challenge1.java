import java.util.Scanner;

public class Challenge1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int Z = sc.nextInt();
        int[] X = new int[Z];
        for (int i = 0; i < Z; i++) {
            X[i] = sc.nextInt();
        }
        StringBuilder lastDigits = new StringBuilder();
        for (int i = 0; i < Z; i++) {
            lastDigits.append(X[i] % 10);
        }
        if (Integer.parseInt(lastDigits.toString()) % 10 == 0) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}
