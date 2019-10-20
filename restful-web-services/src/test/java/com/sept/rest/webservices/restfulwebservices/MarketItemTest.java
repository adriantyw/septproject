package com.sept.rest.webservices.restfulwebservices;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItem;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles("test")
public class MarketItemTest {

	@Test
	public void getIdtest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.getId();
		assertEquals(Long.valueOf(1), testitem.getId());
	}
	
	@Test
	public void setIdtest() {
		MarketItem testitem = new MarketItem(0, null, null, 0);
		testitem.setId(Long.valueOf(1));
		assertEquals(Long.valueOf(1), testitem.getId());
	}

	@Test
	public void getItemNametest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.getItemName();
		assertEquals("book", testitem.getItemName());
	}
	
	@Test
	public void setUsernametest() {
		MarketItem testitem = new MarketItem(0, null, null, 0);
		testitem.setUsername("sept");
		assertEquals("sept", testitem.getUsername());
	}
	
	@Test
	public void getUsernametest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.getUsername();
		assertEquals("sept", testitem.getUsername());
	}
	
	@Test
	public void getPricetest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.getPrice();
		assertEquals(20.50, testitem.getPrice(), 0.01);
	}
	
	@Test
	public void hashCodetest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.hashCode();
		assertEquals(32,testitem.hashCode());
	}


}