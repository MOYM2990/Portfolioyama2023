// メニューボタン
$('.sidevisual_menubutton').click(()=>{
    $('.sidevisual_menubutton').toggleClass('menubutton_action');
    $('.sidevisual_nav').toggleClass('action_menu');
});

// スクロール時のアニメーション
const scrollAnime =()=> {
    //規定量スクロールしたら背景の色が変わる
    let scroll = $(window).scrollTop();
    let windowSize=$(window).width();

    if(scroll<300) {
        $('.sidevisual_bg').css('background-color','#FEF4F4');
        $('svg path').css('stroke','#E83929');
        if(windowSize>768){
            $('.sidevisual h2').css('color','#E83929');            
            // 疑似クラス操作 背景赤の時だけ付与したい
            if($('.sidevisual_a').hasClass('sidevisual_switchJS')){
                $('.sidevisual_a').removeClass('sidevisual_switchJS');
            }
            if($('.sidevisual_a').hasClass('sidevisual_a_add')){
                $('.sidevisual_a').removeClass('sidevisual_a_add');
            }
        }
    }
    if(scroll >= 300 && scroll < 1400) {
        // 背景色
        $('.sidevisual_bg').css('background-color','#FFFFFF');
        $('svg path').css('stroke','#E83929');
        // メニューの色変更
        if(windowSize>768){
            $('.sidevisual h2').css('color','#E83929');            
            // 疑似クラス操作 背景赤の時だけ付与したい
            if($('.sidevisual_a').hasClass('sidevisual_switchJS')){
                $('.sidevisual_a').removeClass('sidevisual_switchJS');
            }
            if($('.sidevisual_a').hasClass('sidevisual_a_add')){
                $('.sidevisual_a').removeClass('sidevisual_a_add');
            }
        }

    } else if (scroll>=1400 && scroll<2400) {
        // 背景色
        $('.sidevisual_bg').css('background-color','#FEF4F4');
        $('svg path').css('stroke','#E83929');
        // メニューの色変更
        if(windowSize>768){
            $('.sidevisual h2').css('color','#E83929');
            // 疑似クラス操作 背景赤の時だけ付与したい
            if($('.sidevisual_a').hasClass('sidevisual_switchJS')){
                $('.sidevisual_a').removeClass('sidevisual_switchJS');
            }
            if($('.sidevisual_a').hasClass('sidevisual_a_add')){
                $('.sidevisual_a').removeClass('sidevisual_a_add');
            }
        }
    } else if (scroll>=2400) {
        // 背景色
        $('.sidevisual_bg').css('background-color','#E83929');
        $('svg path').css('stroke','#FEF4F4');
        // メニューの色変更
        if(windowSize>768){
            $('.sidevisual h2').css('color','#FEF4F4');
            // 疑似クラス操作 背景赤の時だけ付与したい
            if(!$('.sidevisual_a').hasClass('sidevisual_switchJS')){
                $('.sidevisual_a').addClass('sidevisual_switchJS');
            }
            if(!$('.sidevisual_a').hasClass('sidevisual_a_add')){
                $('.sidevisual_a').addClass('sidevisual_a_add');
            }
        }
    }
};

// ★のアニメーション
const delayScrollAnime = () => {

    let time = 0.1;
    let value = time;

        $('.about_skill_stars').each(function () {
            let scroll = $(window).scrollTop();//現在のスクロール値
            let windowHeight = $(window).height();//表示画面の高さ
            let elementHeight=$('.about_skill_box').offset().top;//画面の一番上から要素までの高さ
            let childs = $(this).children();

            // console.log(childs);
            if(scroll >= elementHeight - windowHeight + 100) {
                $(childs).each(function(){
                    if(!$(this).hasClass('.about_skill_starfadein')) {
                        $(childs).addClass('about_skill_starfadein');
                        $(this).css("animation-delay",value + "s");
                        value = value + time;
                    }
                });
            } else {
                $(childs).removeClass('about_skill_starfadein');
            }
        });
}

// ★のアニメーション
const lineScrollAnime = () => {

    let time = 0.2;
    let value = time;

        $('.divide_svg').each(function () {
            let scroll = $(window).scrollTop();//現在のスクロール値
            let windowHeight = $(window).height();//表示画面の高さ
            let elementHeight=$(this).offset().top;//画面の一番上から要素までの高さ
            let childs = $(this).children();

            // console.log(childs);
            if(scroll >= elementHeight - windowHeight - 100) {
                $(childs).each(function(){
                    if(!$(this).hasClass('.divide_fadein')) {
                        $(childs).addClass('divide_fadein');
                        $(this).css("animation-delay",value + "s");
                        value = value + time;
                    }
                });
            } else {
                $(childs).removeClass('divide_fadein');
            }
        });
}


$(window).scroll(()=>{
    scrollAnime();
    delayScrollAnime();
    lineScrollAnime();
});

$(window).on('load',()=>{
    scrollAnime();
    delayScrollAnime();
    lineScrollAnime();
});

// モーダル
$(function(){
	// 変数に要素を入れる
	var open = $('.works_modal_open'),
        open2 = $('.works_modal_open2'),
        open3 = $('.works_modal_open3'),
		close = $('.works_modal_close'),
		container = $('.works_modal_container');
		container2 = $('.works_modal_container2');
		container3 = $('.works_modal_container3');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');        
        $('body').css('overflow', 'hidden');
		return false;
	});

	open2.on('click',function(){	
		container2.addClass('active');
        $('body').css('overflow', 'hidden');
		return false;
	});

	open3.on('click',function(){	
		container3.addClass('active');
        $('body').css('overflow', 'hidden');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
		container2.removeClass('active');
		container3.removeClass('active');
        $('body').removeAttr('style');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.works_modal_body').length) {
			container.removeClass('active');
			container2.removeClass('active');
			container3.removeClass('active');
            $('body').removeAttr('style');
		}
	});
});