package com.sept.rest.webservices.restfulwebservices.martketitem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MarketItem 
{
	@Id
	@GeneratedValue
	private Long id;
	private String itemName;
	private String username;
	private double price;

	public MarketItem() 
	{

	}
	public MarketItem(long id, String itemName, String username, double price) 
	{
		super();
		this.id = id;
		this.itemName = itemName;
		this.username = username;
		this.price = price;
	}

	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
	{
		this.id = id;
	}

	public String getItemName() 
	{
		return itemName;
	}

	public void setUsername(String username) 
	{
		this.username = username;
	}
	
	public String getUsername() 
	{
		return username;
	}

	public double getPrice() 
	{
		return price;
	}

	@Override
	public int hashCode() 
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) 
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MarketItem other = (MarketItem) obj;
		if (id != other.id)
			return false;
		return true;
	}
}