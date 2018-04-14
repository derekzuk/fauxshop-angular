package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Products;
import com.mycompany.myapp.repository.ProductsDescriptionRepository;
import com.mycompany.myapp.repository.ProductsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductsService {

    private final Logger log = LoggerFactory.getLogger(ProductsService.class);

    private final ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository, ProductsDescriptionRepository productsDescriptionRepository) {
        this.productsRepository = productsRepository;
    }

    public Optional<Products> getProductsByProductsId(Long productsId) {
        return productsRepository.findOneByProductsId(productsId);
    }

    public List<Products> getProducts() {
        return productsRepository.findAll();
    }
}
