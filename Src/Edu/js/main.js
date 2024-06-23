(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


$("#BtnSubmit").click(function()
{
    $("#BtnSubmit").attr("disabled", true);
    $("#BtnSubmit").html("در حال ثبت");

    var MobileRegex = new RegExp('09(1[0-9]|3[0-9]|2[0-9]|0[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}');
    if (MobileRegex.test($("#mobile").val()) == false)
    {
        ShowToast("شماره موبایل صحیح نیست");
        $("#BtnSubmit").attr("disabled", false);    
        $("#BtnSubmit").html("ثبت درخواست");
        return;
    }
     
    $.ajax({
        url: 'https://api.kharaei.ir/v2/courseregistration',
        type: "POST",        
        data: {
            fullname: $("#fullname").val(),
            mobile: $("#mobile").val(),
            email: $("#email").val(),
            birthday  : $("#birthday").val()
        },
        success: function (content) {
            console.log(content);
            ShowToast(content.message);        
            $("#BtnSubmit").attr("disabled", false);    
            $("#BtnSubmit").html("ثبت درخواست");
        },
        error: function (xhr, status, error) { 
            console.log("Error Message: " + xhr.status + " - " + xhr.statusText);
            ShowToast("ثبت درخواست با خطا مواجه شد؛ لطفاً با من تماس بگیرید");
            $("#BtnSubmit").attr("disabled", false);    
            $("#BtnSubmit").html("ثبت درخواست");
        }
    });
});

function ShowToast(strText) {
    var snackbar = document.getElementById("snackbar");
    $('#snackbar').text(strText);
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

$(".InputNumber").on("keypress", function (e) {
    var result = false;
    try {
        var charCode = (e.which) ? e.which : e.keyCode;

        if ((charCode >= 48 && charCode <= 57) || (charCode >= 1776 && charCode <= 1785))
            result = true;
        else
            result = false;
    }
    catch (err) {
        result = false;
    }
    return result;
});