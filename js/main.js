let cartItems = new Array();


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

    $('.purchase-button').on('click', function() {
        let price = $(this).parent().parent().find('.price').text()
        let color = $(this).parent().parent().find('[name=color] option:selected').val()
        cartItems.push({'price': price, 'color': color})
        console.log(cartItems)
    });
});
$(window).scroll(function() {
    $('.fadein').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200) {
            $(this).addClass('scrollin');
        }
    });
});