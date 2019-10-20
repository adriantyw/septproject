package com.sept.rest.webservices.restfulwebservices;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.calendarevent.CalendarEvent;
import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItem;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CalendarEventTest {
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
	public void hashCodetest() {
		MarketItem testitem = new MarketItem(1, "book", "sept", 20.50);
		testitem.hashCode();
		assertEquals(32,testitem.hashCode());
	}
	
	

}