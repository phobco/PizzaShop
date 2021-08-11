function something()
{
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

	x = x * 1 + 1; // x = x + 1

	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);

}

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

		var key = localStorage.key(i);
		var value = window.localStorage.getItem(key);
		
		if (key.indexOf('product_') == 0)
		{
			result = result + value * 1;
		}
	}
	
	return result;
		
}

function info(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);

	if (x == null) 
	{
		x = 0;
	}

	alert(x + ' in cart')
}

function delete_product(id)
{
	var key = 'product_' + id;
	var value = window.localStorage.getItem(key);
	
	if (value != 0)
	{
		value = value * 1 - 1;	
	}
	
	window.localStorage.setItem(key, value);
}