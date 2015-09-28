
window.addEventListener('load',function () {

	function update() {
		setTimeout(function () {
			$('a[data-url]').attr('target','_blank');
		},500)
	}
	update()

	var $window=$(window)
	$window.on('scroll',function(e) {
		var offset=$("body").height()-$window.height()-$window.scrollTop()
		console.log('offset: '+offset);
		if(offset<500){
			update();
		}
	})


})
