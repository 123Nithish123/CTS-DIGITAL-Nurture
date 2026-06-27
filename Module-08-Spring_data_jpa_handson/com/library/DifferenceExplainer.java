package com.library;

public class DifferenceExplainer {
    public static void main(String[] args) {
        System.out.println("=== Difference between JPA, Hibernate and Spring Data JPA ===\n");

        System.out.println("1. JPA (Java Persistence API):");
        System.out.println("   - Specification/standard for ORM in Java");
        System.out.println("   - Defines annotations (@Entity, @Id, @Table) and interfaces");
        System.out.println("   - Only a specification - needs an implementation to work\n");

        System.out.println("2. Hibernate:");
        System.out.println("   - Most popular JPA implementation");
        System.out.println("   - Provides additional features beyond JPA spec");
        System.out.println("   - Can be used with or without JPA annotations\n");

        System.out.println("3. Spring Data JPA:");
        System.out.println("   - Spring module that adds abstraction over JPA");
        System.out.println("   - Provides repository support (JpaRepository, CrudRepository)");
        System.out.println("   - Automatically implements queries based on method names");
        System.out.println("   - Reduces boilerplate code significantly\n");

        System.out.println("Summary:");
        System.out.println("  JPA = specification (what to do)");
        System.out.println("  Hibernate = implementation (how to do it)");
        System.out.println("  Spring Data JPA = abstraction layer (makes it easier)");
    }
}
