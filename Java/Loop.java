import java.util.Scanner;
public class Loop{
public static void main(String args [ ])
{
int a[ ]=new int[100];
Scanner obj=new Scanner(System.in);
for(int i=0;i<=5;i++)
{
System.out.println("Enter value of array ");
a[i]=obj.nextInt();
}
for(int i=0;i<=100;i++)
{
System.out.println(" the value of array "+ "a[ "+ i + "] "+ " is"+"  " + a[i]);
}
}
}