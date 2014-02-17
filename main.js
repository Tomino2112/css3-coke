jQuery(document).ready(function(){
	var minTop = 0;
	var maxTop = jQuery('.can-body').height()-20;
	var minLeft = 0;
	var maxLeft = jQuery('.can-body').width()-10;
	var minSize = 10;
	var maxSize = 30;

	function random_number(min,max){
		return Math.round(Math.random() * (max - min) + min);
	}

	function createBubble(){
		var output = '<div class="bubble" style="';

		var top = random_number(minTop,maxTop);
		var left = random_number(minLeft,maxLeft);
		var size = random_number(minSize,maxSize);
		var sizeTwo = (size/0.9)-2;
		if ((left+size)>maxLeft){
			left = maxLeft-size;
		}
		output += 'top:'+top+'px;left:'+left+'px;width:'+size+'px;height:'+sizeTwo+'px;';

		var radius = size/2;
		output += 'border-radius:'+radius+'px;';

		var shadowOffset = size/8;
		var shadowSize = size/5;
		output += 'box-shadow:inset '+shadowOffset+'px '+shadowOffset+'px '+shadowSize+'px rgba(0,0,0,0.3);';

		output += '"></div>';
		return output;
	}

	jQuery('.bubblesThrow').click(function(e){
		e.preventDefault();
		// CLean bubbles
		jQuery('.bubble').remove();

		for (var i=1;i<=jQuery('.bubblesNo').val();i++){
			//alert(createBubble());
			jQuery('.can-body').append(createBubble());
		}
	});



});