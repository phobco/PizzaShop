// Adds a product to  the cart

function add_to_cart(id) 
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	
	x = x * 1 + 1;
	
	window.localStorage.setItem(key, x);
	
	cart_get_number_of_product();
	update_orders_input();
	update_orders_button();
}

function cart_get_orders() 
{
	var string = '';
	 
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		
		var value = window.localStorage.getItem(key);
		
		if (key.indexOf('product_') == 0)
		{
			string = string + key + '=' + value + ',';
		}
	}
	
	return string;
}

function cart_get_number_of_items() 
{
	var result = 0;
	
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		
		if (key.indexOf('product_') == 0)
		{
			result = result + value * 1;
		}
	}
	
	return result;
		
}

// Adds number for each product in table

function cart_get_number_of_product()   
{	
	var n = 9;							// n - the number of all products in the store (+1)
	for (var i = 0; i < n; i++)
	{	
	$('#' + i).text(get_id(i));
	}
}


function delete_product_in_table(id)
{
	var key = 'product_' + id;
	var value = window.localStorage.getItem(key);
	
	if (value == null)
	{
		value = 0;
	}

	if (value != 0)
	{
		value = value - 1;
		window.localStorage.setItem(key, value);
	}
	cart_get_number_of_product();
	update_orders_button();
	update_orders_input();	
}

function get_id(id)
{
	var key = 'product_' + id;
	var value = window.localStorage.getItem(key);

	if (value == null)
	{
		value = 0;
	}

	return value;
}

function update_orders_input() 
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}


function update_orders_button() 
{
	var orders = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_total').val(orders);
}

function cancel_order()
{
	alert('Order is canceled');
	return false;
}