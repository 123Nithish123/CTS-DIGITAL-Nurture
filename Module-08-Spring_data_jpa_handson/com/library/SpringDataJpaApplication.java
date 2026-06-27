package com.library;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataJpaApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaApplication.class, args);
    }

    @Bean
    CommandLineRunner demo(BookRepository repo) {
        return args -> {
            repo.save(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
            repo.save(new Book("1984", "George Orwell"));
            repo.save(new Book("To Kill a Mockingbird", "Harper Lee"));

            System.out.println("All books:");
            repo.findAll().forEach(System.out::println);
        };
    }
}
