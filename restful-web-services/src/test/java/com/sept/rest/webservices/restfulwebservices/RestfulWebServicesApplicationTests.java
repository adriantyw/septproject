package com.sept.rest.webservices.restfulwebservices;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItemJpaRepository;


@RunWith(SpringRunner.class)
@DataJpaTest
public class RestfulWebServicesApplicationTests {
	@Autowired
	MarketItemJpaRepository repository;
	

	@Test
	public void checkItemName() 
	{
		assertEquals("Book", repository.findById(Long.valueOf(1)).get().getItemName());
	}

}
