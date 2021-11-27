const buttons = Array.from(document.getElementsByClassName('btn'));
const display = document.getElementById('input');

buttons.map(function(button){
	button.addEventListener('click', function(event){
		switch(event.target.innerText){
			case 'Clear':{
				display.innerText = '';
				break;
			}
			case '←':{
				display.innerText = display.innerText.slice(0, -1);
				break;
			}
			case '=': {
				if(eval(display.innerText) === undefined){
					display.innerText = 'Undefined Please Try Again!';
				}else {
					display.innerText = eval(display.innerText);
				}
				break;
			}
			default: {
				display.innerText += event.target.innerText;
			}
		}
	});
});