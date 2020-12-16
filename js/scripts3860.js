$(document).ready(function(){
	
	var $audio = document.getElementById('audio');
	var $video = document.getElementById('bgvid');
	
	var $t1 = $('#t1');
	var $t2 = $('#t2');
	var $p1 = $('#p1');
	
	var isIE = detectIE();
	
	console.log(isIE);
	
	if(isIE && isIE < 12){
		
		$('svg').hide();
		$('#logo').show();
			
	}
	
	
	
	var isMobile = 0;
	
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		isMobile = 1;
	}
	

	
	$('.cvr').on('click', function(){
		
		var $topCover = $('#topcover');
		var $bottomCover = $('#bottomcover');
		
		$topCover.animate({
			top: '-100%'
		},1000);
		
		$bottomCover.animate({
			bottom: '-75%'
		},1000);
		
						
		// Play
		
		
		$('h1').delay(1500).animate({
			opacity : '1',
			paddingBottom : '15px',
		}, 1000);
		
		$('h2').delay(2000).animate({
			opacity : '0.7',
			paddingBottom : '0',
		}, 1000);
		
		
		
		if(isMobile){
		}else{
			
			$('h1').delay(2000).animate({
				fontSize : '50px'
			}, 1000);
			$('h2').delay(1500).animate({
				fontSize : '30px'
			}, 1000);

		}
		
		// Snow
		if(isMobile){
			$('.sky').snowfall({image :"images/flake.png", minSize: 10, maxSize:35, flakeCount:10});
		}else{
			$('.sky').snowfall({image :"images/flake.png", minSize: 10, maxSize:55, flakeCount:30});
		}
		
		$('.snowfall-flakes:nth-child(4n)').attr('src', 'images/flake-ttp.png')
		
		
		// Logo
		$t1.delay(6000).animate({
			opacity : 1,
		}, 500);
		$t2.delay(6300).animate({
			opacity : 1,
		}, 500);
		$p1.delay(6600).animate({
			opacity : 1,
		}, 500);
		
		
		
	});
	
	if(location.hash == "#open"){
		$(".cvr").delay(1000).trigger( "click" );
		$('.text').hide();
	}
	
	
});


function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}




