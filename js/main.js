var a =5

// if (a==5) {
// 	alert( 'все верно');
// }

// if (a==7){
// 	alert('Это не так!');

// } else {
// 	alert('что то другое');
// }
 var user={
	'name': 'Петя',
	'surname': 'Васичкин',
	'age': 25

}
// alert (user.surname)
// var mas=['Петя','Васичкин',25]
// alert(mas[0])

var btn = document.getElementById('btn');

btn.onclick = function() {
	var text = document.querySelector('.intro');
	text.classList.add('red');

} 


$(function () {
	$(window).scroll(function() {
	    $('.learn-title ').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})

