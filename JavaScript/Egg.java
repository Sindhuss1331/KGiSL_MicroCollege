import java.util.Scanner;

public class Egg{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String wd = scanner.nextLine();

        int e = 0;
        int g = 0;
        for (int i = 0; i < wd.length(); i++) {
            char c = wd.charAt(i);
            if (c == 'E' || c == 'e') {
                e++;
            } else if (c == 'G' || c == 'g') {
                g++;
            }
        }

        
        }
    }
