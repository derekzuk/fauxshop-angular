package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ProductsDescription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductsDescriptionRepository extends JpaRepository<ProductsDescription, String> {

    Optional<ProductsDescription> findOneByProductsId(Long productsId);

}
