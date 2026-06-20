import java.util.Arrays;
import java.util.Comparator;
class Product {
    int productId;
    String productName;
    String category;
    Product(int productId, String productname, String category) {
        this.productId = productId;
        this.productName = productname;
        this.category = category;
    }
}
public class LinearSearchandBinarySearch{
    public static Product linearSearch(Product[] products, int id) {
        for(Product product : products) {
            if(product.productId == id) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int id) {
        int low=0;
        int high=products.length - 1;
        while(low <= high) {
            int mid =(low + high)/2;
            if(products[mid].productId == id) {
                return products[mid];
            }
            else if(products[mid].productId < id) {
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Mobile", "Electronics"),
            new Product(105, "Shoes", "Fashion"),
            new Product(102, "Watch", "Accessories"),
            new Product(104, "Book", "Education")
        };
        int searchId = 104;
        Product result1 = linearSearch(products, searchId);
        if(result1 != null) {
            System.out.println("Linear Search:");
            System.out.println("Product Found: " + result1.productName);
        }else{
            System.out.println("Product Not Found");
        }
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        Product result2 = binarySearch(products, searchId);
        if(result2 != null){
            System.out.println("\nBinary Search:");
            System.out.println("Product Found: " + result2.productName);
        }
        else{
            System.out.println("Product Not Found");
        }
    }
}



// Output:
// Linear Search:
// Product Found: Book
// Binary Search:
// Product Found: Book