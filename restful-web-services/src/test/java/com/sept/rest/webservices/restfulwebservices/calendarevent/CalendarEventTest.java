package com.sept.rest.webservices.restfulwebservices.calendarevent;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItem;
import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItemJpaRepository;

//@RunWith(SpringRunner.class)
//@DataJpaTest
public class CalendarEventTest {
	@Autowired
	CalendarEventJpaRepository repository;

	@Test
	public void getIdtest() {
		CalendarEvent calendarevent = new CalendarEvent(1, "sept", "Birthday", null);
		calendarevent.getId();
		assertEquals(Long.valueOf(1), calendarevent.getId());
	}
	
	@Test
	public void setIdtest() {
		CalendarEvent calendarevent = new CalendarEvent(0, null, null, null);
		calendarevent.setId(Long.valueOf(1));
		assertEquals(Long.valueOf(1), calendarevent.getId());
	}
	
	@Test
	public void getUsernametest() {
		CalendarEvent calendarevent = new CalendarEvent(1, "sept", "Birthday", null);
		calendarevent.getUsername();
		assertEquals("sept", calendarevent.getUsername());
	}
	
	@Test
	public void setUsernametest() {
		CalendarEvent calendarevent = new CalendarEvent(0, null, null, null);
		calendarevent.setUsername("sept");
		assertEquals("sept", calendarevent.getUsername());
	}
	
	@Test
	public void getTitletest() {
		CalendarEvent calendarevent = new CalendarEvent(1, "sept", "Birthday", null);
		calendarevent.getTitle();
		assertEquals("Birthday", calendarevent.getTitle());
	}
	
	@Test
	public void setTitletest() {
		CalendarEvent calendarevent = new CalendarEvent(0, null, null, null);
		calendarevent.setTitle("Birthday");
		assertEquals("Birthday", calendarevent.getTitle());
	}
	
	@Test
	public void getDatetest() {
		fail("Not yet implemented");
	}
	
	@Test
	public void setDate() {
		fail("Not yet implemented");
	}
	
	@Test
	public void hashCodetest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.hashCode();
		assertEquals(32,testitem.hashCode());
	}
	
	@Test
	public void test() {
		fail("Not yet implemented");
	}
	
	

}
