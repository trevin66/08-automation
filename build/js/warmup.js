"use strict";$(document).ready(function(){$("circle").click(function(){var t=$(this).attr("r");$(this).attr("r",1.1*t)});var t=function(){$(this).fadeOut()};$(".removable").click(t),$("#add").click(function(){var c=$('<p><button class="removable">Remove me!</button></p>');c.click(t),$("#add").before(c)})});