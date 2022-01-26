// Adds a product to  the cart

function add_to_cart(id){
	let key = 'product_' + id;
	let x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	
	window.localStorage.setItem(key, x);
	
	cart_get_number_of_product();
	update_orders_input();
	update_orders_button();
}

function cart_get_orders(){
	let string = '';
	 
	for (let i = 0; i < localStorage.length; i++){
		let key = window.localStorage.key(i);
		let value = window.localStorage.getItem(key);
		
		if (key.indexOf('product_') == 0){
			string = string + key + '=' + value + ',';
		}
	}
	
	return string;
}

function cart_get_number_of_items(){
	let result = 0;
	
	for (let i = 0; i < localStorage.length; i++){
		let key = window.localStorage.key(i);
		let value = window.localStorage.getItem(key);
		
		if (key.indexOf('product_') == 0){
			result = result + value * 1;
		}
	}
	
	return result;
}

// Adds number for each product in table

function cart_get_number_of_product(){	
	// n - the number of all products in the store (+1)
	let n = 9;
	
	for (let i = 0; i < n; i++){	
	$('#' + i).text(get_id(i));
	}
}


function delete_product_in_table(id){
	let key = 'product_' + id;
	let value = window.localStorage.getItem(key);
	
	if (value == null){
		value = 0;
	}

	if (value != 0){
		value = value - 1;
		window.localStorage.setItem(key, value);
	}
	
	cart_get_number_of_product();
	update_orders_button();
	update_orders_input();	
}

function get_id(id){
	let key = 'product_' + id;
	let value = window.localStorage.getItem(key);

	if (value == null){
		value = 0;
	}

	return value;
}

function update_orders_input(){
	let orders = cart_get_orders();

	$('#orders_input').val(orders);
}


function update_orders_button(){
	let orders = 'Cart (' + cart_get_number_of_items() + ')';
	
	$('#orders_button').val(orders);
}

function cancel_order(){

	window.localStorage.clear();

	update_orders_input();
	update_orders_button();

	$('#cart').text('Your cart is now empty.');

	return false;
}
