"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");return n==-1?0:e.length-n-1}function r(e,r){var E=r;void 0===E&&(E=Math.min(n(e),3));var M=Math.pow(10,E),a=(e*M|0)%M;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пре подне","по подне"],DAY:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],ERANAMES:["Пре нове ере","Нове ере"],ERAS:["п. н. е.","н. е."],FIRSTDAYOFWEEK:0,MONTH:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],SHORTDAY:["нед","пон","уто","сре","чет","пет","суб"],SHORTMONTH:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH.mm.ss",mediumDate:"dd.MM.y.",mediumTime:"HH.mm.ss",short:"d.M.yy. HH.mm",shortDate:"d.M.yy.",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sr",pluralCat:function(e,n){var M=0|e,a=r(e,n);return 0==a.v&&M%10==1&&M%100!=11||a.f%10==1&&a.f%100!=11?E.ONE:0==a.v&&M%10>=2&&M%10<=4&&(M%100<12||M%100>14)||a.f%10>=2&&a.f%10<=4&&(a.f%100<12||a.f%100>14)?E.FEW:E.OTHER}})}]);