import java.util.Scanner;
public class Table
{
  public static void main(String args [ ])
   {
     Scanner obj=new Scanner(System.in);
     System.out.println("Enter the value : ");
     int num=obj.nextInt();
     for(int i=1;i<=10;i++)
     {
       int result=num*i;
       System.out.println(i+"x"+num+"="+result);
     }
    }
}    
     

  