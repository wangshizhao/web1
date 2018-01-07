$(function() {
	$('#top').terseBanner();
	/****************************** 锚点滚动 ******************************/
	$.fn.anchorScroll = function(option) {
		return this.each(function() {
			var options = $.extend({
				fixed: 0,
				offset: 0
			}, {}, typeof option === 'object' && option);
			var $anchorMenu = $(this),
				$anchorItem = $anchorMenu.find('a'),
				pageIsScrolling = false;
			// 点击锚点时页面滚动
			$anchorItem.click(function(e){
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
				pageIsScrolling = true;
				try {
					var $target = $($(this).attr('href'));
					$('html, body').stop(true, false).animate({
						scrollTop: $target.offset().top + options.offset
					}, function() {
						pageIsScrolling = false;
					});
					$(this).addClass('active').siblings().removeClass('active');
				} catch (e) {}
			});
		});
	};
});
