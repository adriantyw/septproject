package com.sept.rest.webservices.restfulwebservices.martketitem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarketItemJpaRepository extends JpaRepository<MarketItem, Long>
{
	List<MarketItem> findByUsername(String username);
}