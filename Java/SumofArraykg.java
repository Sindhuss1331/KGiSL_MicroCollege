import java.util.Scanner;
public class SumofArraykg {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number :");
        int arrsize=sc.nextInt();
        int[] myarr=new int[arrsize];
        System.out.println("Enter the elements :");
        int total=0;
        for(int i=0;i<myarr.length;i++)
        {
            myarr[i]=sc.nextInt();
            total+=myarr[i];
            if(myarr[i]==5)
            {
                System.out.println("You entering the number 5");
            }
        }

        System.out.println("The sum of the element is :"+total);
    }
}
// if(myarr[i]==5)
//             {
//                 continue;
//             }
//             else
//             {
//                 total+=myarr[i];
//             }
