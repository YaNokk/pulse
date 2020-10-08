$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        mobileFirst : true,
        dots : true,
        dotsClass: "my-dots",
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/4_carousel/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/4_carousel/arrow_right.png"></button>'
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
    });

    $('.item__description__more').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.item__description_main').eq(i).toggleClass('item__description_main_active');
            $('.item__description_list').eq(i).toggleClass('item__description_list_active')
        })
    })

    $('.item__description__back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.item__description_main').eq(i).toggleClass('item__description_main_active');
            $('.item__description_list').eq(i).toggleClass('item__description_list_active')
        })
    })

    $('[data-modal=consultation]').on('click',function(){
        $('.overlay, #consultation').css("display", "flex").hide().fadeIn();
    })
    $('.form__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanking').fadeOut();
    })
    $('.button_payment').on('click', function(){
        $('.overlay, #order').css("display", "flex").hide().fadeIn();
    })
    $('.button_payment').each(function(i){
        $(this).on('click', function(){
        $('#order .form__subtitle').text($('.item__description__header').eq(i).text());
        $('.overlay, #order').fadeIn();
        })
    })
    
    $('#consultation-form').validate();
    $('consultation-form').submit(function () {
        return false;
    });
    $('#consultation form').validate();
    $('#consultation form').submit(function () {
        return false;
    });
    $('#order form').validate();
    $('#order').submit(function () {
        return false;
    });
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});