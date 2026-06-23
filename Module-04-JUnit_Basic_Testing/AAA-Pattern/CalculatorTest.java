import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
    }

    @After
    public void tearDown() {
        calc = null;
    }

    @Test
    public void testAdd() {
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(3, 2);
        assertEquals(1, result);
    }

    @Test
    public void testMultiply() {
        int result = calc.multiply(2, 3);
        assertEquals(6, result);
    }

    @Test
    public void testDivide() {
        int result = calc.divide(6, 3);
        assertEquals(2, result);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        calc.divide(1, 0);
    }
}
