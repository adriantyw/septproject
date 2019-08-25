package com.sept.rest.webservices.restfulwebservices.calendarevent;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sept.rest.webservices.restfulwebservices.calendarevent.CalendarEvent;
import com.sept.rest.webservices.restfulwebservices.calendarevent.CalendarEventJpaRepository;
import com.sept.rest.webservices.restfulwebservices.martketitem.MarketItem;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CalendarEventJpaRepositoryTest {
	
	 @Autowired
	 CalendarEventJpaRepository repository;
	 
	 @Before
	 public void setup()
	 {
		 repository.deleteAll(); 
		 
	 }

	 @Test
	 public void findByUsernameTest() throws ParseException
	 {
		 String pattern = "yyyy-MM-dd";
		 SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

		 repository.save(new CalendarEvent(Long.valueOf(1), "sept", "Birthday", simpleDateFormat.parse("2019-10-10") ));
		 repository.save(new CalendarEvent(Long.valueOf(2), "adrian", "Birthday", simpleDateFormat.parse("2019-10-10")));
		 
		 assertEquals(repository.findByUsername("sept").get(0).getDate(), simpleDateFormat.parse("2019-10-10"));
		 assertEquals(repository.findByUsername("sept").get(0).getTitle(), "Birthday");
	 }
	 
	 @Test
	 public void findById() throws ParseException
	 {
		 String pattern = "yyyy-MM-dd";
		 SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		 
		 repository.save(new CalendarEvent(Long.valueOf(1), "sept", "Birthday", simpleDateFormat.parse("2019-10-10") ));
		 repository.save(new CalendarEvent(Long.valueOf(2), "adrian", "Birthday", simpleDateFormat.parse("2019-10-10")));
		 
		 assertTrue(repository.findById(Long.valueOf(1)).isPresent());
		 assertTrue(repository.findById(Long.valueOf(2)).isPresent());
		 assertFalse(repository.findById(Long.valueOf(3)).isPresent());
	 }

}
