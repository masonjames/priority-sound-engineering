!function(e){"use strict";e.fn.awbAnimateCounterBoxes=function(){"IntersectionObserver"in window?e.each(fusion.getObserverSegmentation(e(this)),function(n){var t=fusion.getAnimationIntersectionData(n),o=new IntersectionObserver(function(n,t){e.each(n,function(n,i){var r=e(i.target),u=r.data("value"),s=r.data("direction"),a=r.data("delimiter"),c=0,d=u,f=fusionCountersBox.counter_box_speed,b=Math.round(fusionCountersBox.counter_box_speed/100);fusion.shouldObserverEntryAnimate(i,t)&&(a||(a=""),"down"===s&&(c=u,d=0),r.countTo({from:c,to:d,refreshInterval:b,speed:f,formatter:function(e,n){return"-0"===(e=(e=e.toFixed(n.decimals)).replace(/\B(?=(\d{3})+(?!\d))/g,a))&&(e=0),e}}),o.unobserve(i.target))})},t);e(this).find(".display-counter").each(function(){o.observe(this)})}):e(this).find(".display-counter").each(function(){e(this).text(e(this).data("value"))})}}(jQuery),jQuery(window).on("load fusion-element-render-fusion-counters_box fusion-element-render-fusion_counter_box",function(e,n){(void 0!==n?jQuery('div[data-cid="'+n+'"]'):jQuery(".fusion-counter-box")).awbAnimateCounterBoxes()});