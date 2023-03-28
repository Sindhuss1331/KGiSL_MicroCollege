import java.util.*;

public class Challenge4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt(); 
        while (t-- > 0) {
            int n = sc.nextInt(); 
            int k = sc.nextInt(); 
            int[] a = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = sc.nextInt(); 
            }
            int[] rotatedArray = rotateArray(a, k); 
            for (int i = 0; i < n; i++) {
                System.out.print(rotatedArray[i] + " "); 
            }
            System.out.println();
        }
    }

    private static int[] rotateArray(int[] a, int k) {
        int[] rotatedArray = new int[a.length];
        for (int i = 0; i < a.length; i++) {
            int rotatedIndex = (i + k) % a.length;
            rotatedArray[rotatedIndex] = a[i];
        }
        return rotatedArray;
    }
}
