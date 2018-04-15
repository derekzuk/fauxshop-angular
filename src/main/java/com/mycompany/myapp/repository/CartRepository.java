package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, String> {

    Optional<List<Cart>> findAllById(Long id);

    Cart findOneByCartId(Long cartId);

    void deleteById(Long id);
}

