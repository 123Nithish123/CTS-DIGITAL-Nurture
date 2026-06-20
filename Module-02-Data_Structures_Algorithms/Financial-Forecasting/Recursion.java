public class Recursion {
    static double futureValue(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return futureValue(amount * (1 + rate), rate, years - 1);
    }
    public static void main(String[] args) {
        double amount = 10000;
        double rate = 0.10;
        int years = 5;
        double result = futureValue(amount, rate, years);
        System.out.println("Present Value : " + amount);
        System.out.println("Growth Rate   : " + (rate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.println("Future Value  : " + result);
    }
}




// Output:
// Present Value : 10000.0
// Growth Rate   : 10.0%
// Years         : 5
// Future Value  : 16105.1