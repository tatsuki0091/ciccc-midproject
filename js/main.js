$(document).ready(function() {
    $('.nice-textbox').blur(function() {
            if ($(this).val().length === 0) {
                $('.nice-label').removeClass("focus");
            } else { returns; }
        })
        .focus(function() {
            $('.nice-textLabel').addClass("focus")
        });
    $('.nice-emailbox').blur(function() {
            if ($(this).val().length === 0) {
                $('.nice-label').removeClass("focus");
            } else { returns; }
        })
        .focus(function() {
            $('.nice-emailLabel').addClass("focus")
        });
    $('.nice-textareabox').blur(function() {
            if ($(this).val().length === 0) {
                $('.nice-label').removeClass("focus");
            } else { returns; }
        })
        .focus(function() {
            $('.nice-textareaLabel').addClass("focus")
        });
});
$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin');
        }
    });
});