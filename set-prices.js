var pricesMonthlyStarter,pricesMonthlyStarter_was,pricesMonthlyProfesional,pricesMonthlyProfesional_was,pricesMonthlyAgency,pricesMonthlyAgency_was,pricesAnnualyStarter,pricesAnnualyStarter_was,pricesAnnualyProfesional,pricesAnnualyProfesional_was,pricesAnnualyAgency,pricesAnnualyAgency_was,sliderAmountMap=[1e3,3e3,5e3,1e4,15e3,2e4,3e4,5e4,1e5,3e5,5e5,1e6,1000001],eBayTab=$("#eBay-tab"),HelpdeskTab=$("#Helpdesk-tab");function setPrice(e){if(e<=1e3)$("#amount").text("0 - 1K");else if(e>1e3&&e<1e6){var n=Math.round(e)/1e3;$("#amount").text("Up to: "+n+"K")}else{n=1;$("#amount").text("Over "+n+"M")}}function setPacketsPrices(e){e>8&&($("#monthly_starter").closest(".pricing-plans--item").hide(),$("#monthly_profesional").closest(".pricing-plans--item").hide(),$("#annualy_starter").closest(".pricing-plans--item").hide(),$("#annualy_profesional").closest(".pricing-plans--item").hide(),$(".tool-span").hide()),e<=8&&($("#monthly_starter").closest(".pricing-plans--item").show(),$("#monthly_profesional").closest(".pricing-plans--item").show(),$("#annualy_starter").closest(".pricing-plans--item").show(),$("#annualy_profesional").closest(".pricing-plans--item").show(),$(".tool-span").show()),$("#monthly_starter .pricing-change").text(pricesMonthlyStarter[e]),$("#monthly_profesional .pricing-change").text(pricesMonthlyProfesional[e]),$("#monthly_agency .pricing-change").text(pricesMonthlyAgency[e]),$("#annualy_starter .pricing-change").text(pricesAnnualyStarter[e]),$("#annualy_profesional .pricing-change").text(pricesAnnualyProfesional[e]),$("#annualy_agency .pricing-change").text(pricesAnnualyAgency[e])}$(".pricing-main-tab").on("click",function(){switch($(this).attr("id")){case"#Helpdesk-tab":$("#sales-slider").hide();break;default:$("#sales-slider").show()}}),pricesMonthlyStarter=[16,25,39,60,79,105,132,180,265],pricesMonthlyProfesional=[20,38,52,79,113,140,172,239,372],pricesMonthlyAgency=[25,47,65,100,140,172,220,300,465,999,1332,1999],pricesAnnualyStarter=[12,19,29,45,59,79,99,135,199],pricesAnnualyProfesional=[15,29,39,59,85,105,129,179,279],pricesAnnualyAgency=[19,35,49,75,105,129,165,225,349,749,999,1499],HelpdeskTab.is(".w--current")&&(pricesMonthlyStarter=[17.59,19.99,30.19,35.19,39.99,50.39,59.99,84.79,108.79],pricesMonthlyProfesional=[23.99,28.79,37.59,43.99,50.39,55.99,67.99,91.99,119.99],pricesMonthlyAgency=[27.99,36.79,43.99,50.39,59.99,67.99,75.99,95.99,123.64,143.99,183.99,223.99,239.99],pricesAnnualyStarter=[10.55,11.99,18.11,21.11,23.99,30.23,35.99,50.87,65.27],pricesAnnualyProfesional=[14.39,17.27,22.55,26.39,30.23,33.59,40.79,55.19,71.99],pricesAnnualyAgency=[16.79,22.07,26.39,30.23,35.99,40.79,45.59,57.59,74.18,86.39,110.39,134.39,143.99]),$(function(){$("#slider").slider({range:"min",step:1e-4,max:sliderAmountMap.length-1,slide:function(e,n){var t=Math.floor(n.value);setPrice(sliderAmountMap[t]),setPacketsPrices(t);var a=$(this).find(".ui-slider-handle:first").position(),i=parseInt(a.left);const s=window.matchMedia("(max-width: 767px)");s.matches?$(".amount").css("margin-left",i+"px"):s.matches||$(".amount").css("margin-left",i-63+"px")}}),$("#amount").text("0 - 1K")}),$(document).ready(function(){$(".pricing-faq--question").on("click",function(){$(this).toggleClass("active")}),$("a[data-w-tab='Tab 1']").on("click",function(){$(".text-plan").text("Annualy")}),$("a[data-w-tab='Tab 2']").on("click",function(){$(".text-plan").text("Monthly")})});
