/**
 * Main project javascript file (entry point)
 */

import '../scss/main.scss';
import $ from 'jquery';

$(document).ready(
    function () {
        $(".my-element").on("click", function () {
            $(this).css('background-color', 'yellow').animate({
                opacity: 0.25,
                left: "+=50",
                height: "toggle"
            }, 1000, function () {
                // Animation complete.
            });
        })
    })


