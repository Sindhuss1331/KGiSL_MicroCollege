import java.util.Scanner;
class Reverse
{
  public static void main(String args[])
{
  int[ ] a = new int[5];
  Scanner obj=new Scanner(System.in);

 for(int i=0;i<a.length;i++)
  {
   a[i]=obj.nextInt();
}
  
  for(int x: a)
{
 System.out.print(x);
}

  for(int i=a.length-1;i>=0;i--)
  {
    System.out.println("Reverse the answer" + a[i]);
}

}
}
  
  