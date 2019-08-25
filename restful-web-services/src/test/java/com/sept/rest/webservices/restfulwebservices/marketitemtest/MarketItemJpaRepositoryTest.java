package com.sept.rest.webservices.restfulwebservices.marketitemtest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItem;
import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItemJpaRepository;


@RunWith(SpringRunner.class)
@DataJpaTest
public class MarketItemJpaRepositoryTest {
	
	 @Autowired
	 MarketItemJpaRepository repository;
	 
	 @Before
	 public void setup()
	 {
		 repository.deleteAll();
	 }
	 
	 @Test
	 public void repositoryAddTest() 
	 {
		 repository.save(new MarketItem(Long.valueOf(1), "book", "sept", 20.50));
		 repository.save(new MarketItem(Long.valueOf(2), "pens", "Adrian", 5));
		 assertEquals(repository.findAll().size(), 2);		 
	 }

	 @Test
	 public void findByUsernameTest()
	 {
		 repository.save(new MarketItem(Long.valueOf(1), "book", "sept", 20.50));
		 repository.save(new MarketItem(Long.valueOf(2), "pens", "Adrian", 5));
		 
		 assertEquals(repository.findByUsername("sept").get(0).getItemName(), "book");
		 assertEquals(repository.findByUsername("sept").get(0).getPrice(), 20.50, 2);

		 assertEquals(repository.findByUsername("Adrian").get(0).getItemName(), "pens");
		 assertEquals(repository.findByUsername("Adrian").get(0).getPrice(), 5, 2);
	 }
	 
	 @Test
	 public void findById()
	 {
		 repository.save(new MarketItem(Long.valueOf(1), "book", "sept", 20.50));
		 repository.save(new MarketItem(Long.valueOf(2), "pens", "Adrian", 5));
		 
		 assertTrue(repository.findById(Long.valueOf(1)).isPresent());
		 assertTrue(repository.findById(Long.valueOf(2)).isPresent());
		 assertFalse(repository.findById(Long.valueOf(3)).isPresent());
	 }
}
