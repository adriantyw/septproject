package com.sept.rest.webservices.restfulwebservices.calendarevent;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalendarEventJpaRepository extends JpaRepository<CalendarEvent, Long>
{
	List<CalendarEvent> findByUsername(String username);
}