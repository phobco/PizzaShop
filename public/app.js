function something()
{
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

	x = x * 1 + 1;

	window.localStorage.setItem('bbb', x);

	alert(x);

}