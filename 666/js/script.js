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

window.onload=function(){
	var d=document.getElementById('ig1');
	d.onmouseover=function(){
		this.src='img/zyy.png';
	};
	d.onmouseout=function(){
		this.src='img/zy.png';
	};
	var e=document.getElementById('ig2');
	e.onmouseover=function(){
		this.src='img/sll.png';
	};
	e.onmouseout=function(){
		this.src='img/sl.png';
	};
	var f=document.getElementById('ig3');
	f.onmouseover=function(){
		this.src='img/zff.png';
	};
	f.onmouseout=function(){
		this.src='img/zf.png';
	};
	var g=document.getElementById('ig4');
	g.onmouseover=function(){
		this.src='img/cwjj.png';
	};
	g.onmouseout=function(){
		this.src='img/cwj.png';
	};
	var h=document.getElementById('ig5');
	h.onmouseover=function(){
		this.src='img/hyy.png';
	};
	h.onmouseout=function(){
		this.src='img/hy.png';
	};
	var i=document.getElementById('ig6');
	i.onmouseover=function(){
		this.src='img/dcc.png';
	};
	i.onmouseout=function(){
		this.src='img/dc.png';
	};
	var j=document.getElementById('ig7');
	j.onmouseover=function(){
		this.src='img/lbb.png';
	};
	j.onmouseout=function(){
		this.src='img/lb.png';
	};
	var k=document.getElementById('ig8');
	k.onmouseover=function(){
		this.src='img/gyy.png';
	};
	k.onmouseout=function(){
		this.src='img/gy.png';
	};
};




