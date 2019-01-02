package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.OrdersProducts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface OrdersProductsRepository extends JpaRepository<OrdersProducts, String> {

    List<OrdersProducts> findAllByOrderId(Long orderId);
}
