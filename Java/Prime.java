import java.util.Scanner;
public class Prime
{
  public static void main(String args [ ])
{
  int a=10,count;
  for(int i=1;i<=a;i++)
 {
  count=0;
  for(int j=2;j<=i/2;j++)
  {
   if(i%j==0)
  {
   count++;
   break;
  }
 }
   if(count==0)
  System.out.println(i);
}
}
}