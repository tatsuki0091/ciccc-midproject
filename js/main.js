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

    const carA = {
        price: 300,
        color: 'black',
    }
    const carB = {
        price: 500,
        color: 'red',
    }
    const carC = {
        price: 600,
        color: 'white',
    }


    cartItems.push(carA,carB,carC);
    console.log(cartItems);

    // cartItems.forEach(function(){
    //     console.log(price);
    // })

    $(cartItems).each(function(){
        const productPrice = this.price;
        const productColor = this.color;
        console.log(productPrice);
        console.log(productColor);

        
    })

    const subTotal = Number($('#cart-subtotal').text());
    const tax = Number($('#cart-tax').text());
    const shipping = Number($('#cart-shipping').text());
    const grandTotal = Number($('#cart-total').text());
    // console.log(subTotal);
    // console.log(tax);
    // console.log(shipping);
    // console.log(grandTotal);
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