package com.sept.rest.webservices.restfulwebservices.calendarevent;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="https://oceanic-trees-254104.appspot.com")
@RestController
public class CalendarEventJpaResource 
{
	@Autowired
	private CalendarEventJpaRepository eventJpaRepository;

	// Gets all events of a user
	@GetMapping("/jpa/users/{username}/calendar/event")
	public List<CalendarEvent> getAllEvents(@PathVariable String username)
	{
		return eventJpaRepository.findByUsername(username);
	}

	// Gets an event from the user and ID
	@GetMapping("/jpa/users/{username}/calendar/event/{id}")
	public CalendarEvent getEvent(@PathVariable String username, @PathVariable long id)
	{
		return eventJpaRepository.findById(id).get();
	}

	// Deletes an event
	@DeleteMapping("/jpa/users/{username}/calendar/event/{id}")
	public ResponseEntity<Void> deleteEvent(
			@PathVariable String username, @PathVariable long id) 
	{
		eventJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	// Updates an event
	@PutMapping("/jpa/users/{username}/calendar/event/{id}")
	public ResponseEntity<CalendarEvent> updateEvent(
			@PathVariable String username,
			@PathVariable long id, @RequestBody CalendarEvent event)
	{
		event.setUsername(username);
		eventJpaRepository.save(event);
		
		return new ResponseEntity<CalendarEvent>(event, HttpStatus.OK);
	}
	
	// Creates an event
	@PostMapping("/jpa/users/{username}/calendar/event")
	public ResponseEntity<Void> createEvent(
			@PathVariable String username, @RequestBody CalendarEvent event)
	{	
		event.setUsername(username);
		
		CalendarEvent createdEvent = eventJpaRepository.save(event);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdEvent.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
