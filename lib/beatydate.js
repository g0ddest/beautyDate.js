/*
 * JavaScript Beaty Date Rus
 * Copyright (c) 2012 Vitaliy Velikodniy (vitaliy@velikodniy.name)
 * Thanks to John Resig (ejohn.org) for start.
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function beatyDate(time){
    var date = new Date( ( time || "" ).replace( /-/g,"/" ).replace(/[TZ]/g," ") ),
        diff = ( ( ( new Date() ).getTime() - date.getTime() ) / 1000 ),
        day_diff = Math.floor( diff / 86400 );
            
    if ( isNaN( day_diff ) || day_diff < 0 )
        return;
            console.log(diff);
            console.log(day_diff);
    return day_diff == 0 && (
            diff < 60 && "только что" ||
            diff < 120 && "1 минуту назад" ||
            diff < 300 && Math.floor( diff / 60 ) + " минуты назад" ||
            diff < 3600 && Math.floor( diff / 60 ) + " минут назад" ||
            diff < 7200 && "1 час назад" ||
            diff < 18000 && Math.floor( diff / 3600 ) + " часа назад" ||
            diff < 86400 && Math.floor( diff / 3600 ) + " часов назад") ||
        day_diff == 1 && "Вчера" ||
        day_diff < 5 && day_diff + " дня назад" ||
        day_diff < 7 && day_diff + " дней назад" ||
        day_diff < 14 && "Неделю назад" ||
        day_diff < 31 && Math.floor( day_diff / 7 ) + " недели назад" ||
        day_diff < 62 && "Месяц назад" ||
        day_diff < 155 && Math.floor( day_diff / 31 ) + " месяца назад" ||
        day_diff < 366 && Math.floor( day_diff / 31 ) + " месяцев назад" ||
        day_diff < 732 && "Год назад" ||
        day_diff < 1830 && Math.floor( day_diff / 366 ) + " года назад" ||
        Math.floor( day_diff / 366 ) + " лет назад";
}​

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
	jQuery.fn.beatyDate = function(){
		return this.each(function(){
			var date = beatyDate(this.title);
			if ( date )
				jQuery(this).text( date );
		});
	};
