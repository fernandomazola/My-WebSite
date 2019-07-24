/* JAVASCRIPT ARCHIVE */

/* Writing text in screen */
var textApresentation = document.querySelector('.my-apresentation p');

// window.onload = () =>{
//     var leftContainer = document.querySelector('.s-left');
//     var rightContainer = document.querySelector('.s-right');
//     // leftContainer.style.height = '100vh';
//     // rightContainer.style.height = '100vh';
//     setTimeout(() => {
//         leftContainer.style.height = 'auto';
//         // rightContainer.style.height = 'auto';
//     }, 5300);
// }


function typeWrite(textApresentation) {
    var textAp = textApresentation.innerHTML.split('');
    textApresentation.innerHTML = '';
    textAp.forEach((letra, i) => {
        setTimeout(() => {
            textApresentation.innerHTML += letra;
        }, 30 * i);
    });
}

typeWrite(textApresentation);


$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutElastic',
			delay: 3000,
			barColor: '#802240',
			trackColor: '#CC3866',
			scaleColor: false,
			lineWidth: 20,
			trackWidth: 16,
			lineCap: 'butt',
			onStep: function(from, to, percent) {
				this.el.children[0].innerHTML = Math.round(percent);
			}
    });
});


