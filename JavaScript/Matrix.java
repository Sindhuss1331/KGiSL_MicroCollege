import java.util.Scanner;

class Matrix{
    public static List<Integer> spiralOrder(int[][] matrix){
        List<Integer> ans=new ArrayList<Integer>();
        if (matrix.length==0)
        return ans;
        int m = matrix.length, n = matrix[0].length;
        boolean[][] seen = new boolean[m][n];
        int[] dr = {};
        int[] dc = {};
        int x = 0, y = 0, di = 0;
        for (int i = 0; i < m * n; i++) {
            ans.add(matrix[x][y]);
            seen[x][y] = true;
            int cr = x + dr[di];
            int cc = y + dc[di];
  
            if (0 <= cr && cr < m && 0 <= cc && cc < n
                && !seen[cr][cc]) {
                x = cr;
                y = cc;
            }
            else {
                di = (di + 1) % 4;
                x += dr[di];
                y += dc[di];
            }
        }
        return ans;
    }
    public static void main(String args[])
    {
        int a[][] = { };
        Scanner sc=new Scanner(System.in);
        
    }
    
}
    



