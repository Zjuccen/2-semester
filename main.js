jQuery(document).ready(function($) {

    // faratuben //
    $('.fara-toggle').hide();

    $('.fara-button').on('click', function(event) {
        event.preventDefault();
        $('.fara-toggle').toggle();
    });

    // døssing //

    $('.doss-toggle').hide();

    $('.doss-button').on('click', function(event) {
        event.preventDefault();
        $('.doss-toggle').toggle();
    });

    // sam and the soulmates //

    $('.sam-toggle').hide();

    $('.sam-button').on('click', function(event) {
        event.preventDefault();
        $('.sam-toggle').toggle();
    });

})