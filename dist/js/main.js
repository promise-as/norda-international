/*author:tangxue*/

$(function(){

    //调用表单
    if($('.defaults_dataid').size()>0){
		theaMsForm();
	}

    //判断div中是否有hot字段，有则添加hot标签
    var isHot = $(".quality-div").hasClass("hot");
    if(isHot){
        $(".quality-logo").before("<span class='hot-span'></span>");
    }

    //pc底部的弹窗
    if($('.bottom-box').size()>0){
        midtc('.bottom-box','.close',8000,30000,3,'.bottom-cleardiv')
	}
	function midtc(ele,c,f,a,n,s){
      var $par = $(ele);
      var $cleardiv = $(s);
	  var $num = 0
	  popupTc(f);
	  $(c,$par).click(function(){
        $cleardiv.hide();
	    $par.hide();
	    $num ++;
	    if ($num<=n) {
	      popupTc(a)
	    }
	  })
	  function popupTc(d){
	    setTimeout(function(){
            $cleardiv.show();
	        $par.fadeIn(300);
	    },d)
	  }
    }
    
    //pc端的中间弹窗
    $('.showdiglo').click(function(){
		$('.tc-pc').fadeIn()
	})
	$('.tc-pc .close').click(function(){
		$('.tc-pc').fadeOut()
	})
	$('.tc-pc span').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur')
    })
    
    //点击按钮返回页面的顶部
    $(".backtop").click(function(){
        $("html,body").animate({scrollTop:0}, 500);
    })

    //移动端的中间弹窗
    $('.showdiglo').click(function(){
		$('.tc-wap').fadeIn()
		$('#mask').fadeIn()
	})
	$('.tc-wap .close').click(function(){
		$('.tc-wap').fadeOut()
		$('#mask').fadeOut()
	})
	$('.tc-wap span').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur')
    })

    //移动端的定位导航
    $(window).scroll(function() {
        function getDistance(eleClassName, index) {
            var $ele = $('.' + eleClassName);
            if($('.quality-wap').size()>0){
                var mTop = $('.quality-wap').eq(index).offset().top;
            }
            var topJl = $(document).scrollTop();
            var distance = mTop - topJl;
            var boxTop=$(".quality-title-wap").offset().top;//国际地图模块与顶部的距离
            var anchorH=$(".anchor-nav").height();//获取导航条的高度
            var subtractTop = boxTop-anchorH;//得到预留导航条的高度
            if(topJl>=boxTop){//判断如果滚动条到达了国际地图位置时添加active显示导航条
                $(".anchor-nav").addClass("active");
            }else{
                $(".anchor-nav").removeClass("active");
            }
            return distance;
        }
        //循环盒子的数量 到某个盒子给当前导航加上当前的样式
        for (var i = 0; i < $('.quality-wap').length; i++) {
            var ancDistance = getDistance('quality-wap', i);
            var ancHeight = -($('.quality-wap').eq(i).height());
            if (ancDistance <= 0 && ancDistance >= ancHeight) {
                $('.anchor-nav .nav').find('a').eq(i).addClass('active').siblings().removeClass('active');
            }
        }
       
    });
    //循环点击导航的标签
    for(var j=0;j<$('.anchor-nav .nav a').length;j++){
        (function(j){
            $('.anchor-nav .nav a')[j].onclick=function(){
                if($('.quality-wap').size()>0){
                    var ancTop = $('.quality-wap').eq(j).offset().top;
                    var anchorH=$(".anchor-nav").height();//获取导航条的高度
                    var subtractTop = ancTop-anchorH;//得到预留导航条的高度
                }
                $(document).scrollTop(subtractTop);
                $('.anchor-nav .nav').find('a').eq(j).addClass('active').siblings().removeClass('active');
            }
        })(j);
    }

    var swiper4 = new Swiper('.anchor-nav .swiper4', {
        slidesPerView: 6,
        spaceBetween: 26,
        freeMode: true,
        pagination: {
          clickable: true,
        },
      });

    //pc端的图片组
    var swiper = new Swiper('.swiper1', {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },
        slideToClickedSlide: true,
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 56 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 10;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }
    
            }
        }
    })

    //调用轮播插件
	var swiper1 = new Swiper('.swiper5', {
		slidesPerView: 'auto',
		loop: true,
		pagination: {
		el: '.pagination1 ',
		clickable: true,
		},
    });

    //移动端轮播
    var swiper2 = new Swiper('.quality-cont .swiper3', {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        autoplay: true,
        loopedSlides: 5,
        clickable: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.next3',
            prevEl: '.prev3',
        },
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 1.4 + 'rem';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }
    
            }
        }
    })

    
})

