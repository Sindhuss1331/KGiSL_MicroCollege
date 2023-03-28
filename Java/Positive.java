import java.util.Scanner;
public class Positive
{
   public static void main(String args[ ])
   {
     int i;
    Scanner obj=new Scanner(System.in);
    System.out.println("Enter the number :");
    i=obj.nextInt();
    if(i<=1)
     { 
       System.out.println("Value is negative : "+i);
      }
    else if(i>=1)
    {
     System.out.println("Value is positive : "+i);
    }
   }
}
         