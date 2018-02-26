$(document).ready(function(){
	$('.check').change(function(){
		var input = $(this).find('input[type=checkbox]');
		// debugger;
		if (input.val() == '0') {
			input.val('1');
		}else{
			input.val('0');
		}
		$(this).closest('form').submit();
	});
	$('.add-li-task-list').dblclick(function(){
		var sp = $("div").children(".top");
		var inp = $("div").children(".hidden");
		inp.removeClass("hidden");
		sp.addClass("hidden");
		console.log(sp);
	});

});