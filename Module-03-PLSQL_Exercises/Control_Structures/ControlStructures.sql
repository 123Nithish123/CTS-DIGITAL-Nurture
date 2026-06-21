SET SERVEROUTPUT ON;
DECLARE
BEGIN




    -- Scenario 1: Apply 1% discount to senior citizens
    FOR c IN (SELECT CustomerID, Age FROM Customers)
    LOOP
        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;






    -- Scenario 2: Set VIP status
    FOR c IN (SELECT CustomerID, Balance FROM Customers)
    LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;






    -- Scenario 3: Print loan due reminders
    FOR l IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || l.CustomerID ||
            ' has Loan ' || l.LoanID ||
            ' due on ' || l.DueDate
        );
    END LOOP;

    COMMIT;
END;
/




-- Output:
-- Reminder: Customer 101 has Loan 1001 due on 15-JUL-26
-- Reminder: Customer 102 has Loan 1002 due on 20-JUL-26

-- PL/SQL procedure successfully completed.