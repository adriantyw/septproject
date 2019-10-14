package com.sept.rest.webservices.restfulwebservices.martketitem;

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
public class MarketItemJpaResource 
{
	@Autowired
	private MarketItemJpaRepository ItemJpaRepository;

	// Gets all items being sold by a user
	@GetMapping("/jpa/users/{username}/marketplace")
	public List<MarketItem> getAllUserItems(@PathVariable String username)
	{
		return ItemJpaRepository.findByUsername(username);
	}
	
	// Gets all items being sold on the market
	@GetMapping("/jpa/users/marketplace")
	public List<MarketItem> getAllItems()
	{
		return ItemJpaRepository.findAll();
	}

	// Gets a specific item sold by a user
	@GetMapping("/jpa/users/{username}/marketplace/{id}")
	public MarketItem getItem(@PathVariable String username, @PathVariable long id)
	{
		return ItemJpaRepository.findById(id).get();
	}

	// Deletes an item from a user
	@DeleteMapping("/jpa/users/{username}/marketplace/{id}")
	public ResponseEntity<Void> deleteItem(
			@PathVariable String username, @PathVariable long id) 
	{
		ItemJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	// Updates an item from a user
	@PutMapping("/jpa/users/{username}/marketplace/{id}")
	public ResponseEntity<MarketItem> updateItem(
			@PathVariable String username,
			@PathVariable long id, @RequestBody MarketItem item)
	{
		item.setUsername(username);
		ItemJpaRepository.save(item);
		
		return new ResponseEntity<MarketItem>(item, HttpStatus.OK);
	}
	
	// Creates an item
	@PostMapping("/jpa/users/{username}/marketplace/")
	public ResponseEntity<Void> createItem(
			@PathVariable String username, @RequestBody MarketItem item)
	{	
		item.setUsername(username);
		
		MarketItem createdItem = ItemJpaRepository.save(item);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdItem.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
