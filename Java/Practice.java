import java.util.Scanner;

class Practice
{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter the number :");

        int a=sc.nextInt();

        if( a == 5 )
        {
            System.out.println("The number is :"+a);
        }
        else
        {
            System.out.println("The no is not a five:"+a);
        }

    }
}
