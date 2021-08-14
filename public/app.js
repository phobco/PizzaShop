// добавление в корзину

function add_to_cart(id) 
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	
	x = x * 1 + 1;
	
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();
}

// сохранение списка заказов в виде строки вида 'product_=value,...'

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

// обновление списка заказов

function update_orders_input() 
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

// обновление кнопки корзины

function update_orders_button() 
{
	var orders = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_total').val(orders);
}

// общее количество товаров в корзине

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

function cart_get_number_of_product(id)
{
	var key = 'product_' + id;
	var value = window.localStorage.getItem(key);

	return value;
}