package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.ProductsDescription;
import com.mycompany.myapp.repository.ProductsDescriptionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class ProductsDescriptionService {

    private final Logger log = LoggerFactory.getLogger(ProductsDescriptionService.class);

    private final ProductsDescriptionRepository productsDescriptionRepository;

    public ProductsDescriptionService(ProductsDescriptionRepository productsDescriptionRepository) {
        this.productsDescriptionRepository = productsDescriptionRepository;
    }

    public Optional<ProductsDescription> getProductsDescriptionByProductsId(Long productsId) {
        return productsDescriptionRepository.findOneByProductsId(productsId);
    }
}
