function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	
	x = x * 1 + 1;
	
	window.localStorage.setItem(key, x);
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