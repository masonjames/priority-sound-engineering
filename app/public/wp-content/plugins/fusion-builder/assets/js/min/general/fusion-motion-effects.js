!function(e){function t(){e("[data-motion-effects]").each(function(){const e=function(e){const t=e.dataset.motionEffects;try{return JSON.parse(t)}catch(e){return null}}(this),t=this;gsap.registerPlugin(ScrollTrigger);const i=[],n=t.dataset.scrollDevices||"small-visibility, medium-visibility, large-visibility";let a=!0,s="large-visibility";Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_medium+"px)")&&(s="medium-visibility"),Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_small+"px)")&&(s="small-visibility"),n.includes(s)||(a=!1),e.forEach(e=>{const n={};if("scroll"===e.type&&a){const t=e.scroll_type||"transition",o=e.start_element||"top",a=e.start_viewport||"bottom",s=e.end_element||"bottom",r=e.end_viewport||"up";let l="+=0";if(n.type=t,"transition"===t){const t=e.scroll_direction||"up",o=e.transition_speed||1;"up"===t?(n.from={y:50*o},n.y=-50*o,l="-="+50*o):"down"===t?(n.from={y:-50*o},n.y=50*o):"right"===t?(n.from={x:-50*o},n.x=50*o):"left"===t&&(n.from={x:50*o},n.x=-50*o)}else if("fade"===t){const t=e.fade_type||"in";"in"===t?(n.from={opacity:0},n.opacity=1):"out"===t&&(n.from={opacity:1},n.opacity=0)}else if("scale"===t){const t=e.scale_type||"up",o=e.initial_scale||1,i=e.max_scale||1.5,a=e.min_scale||.5;n.from={scale:o},"up"===t?n.scale=i:"down"===t&&(n.scale=a)}else if("rotate"===t){const t=e.initial_rotate||1,o=e.end_rotate||30;n.from={rotation:t},n.rotation=o}else if("blur"===t){const t=e.initial_blur||0,o=e.end_blur||3;n.from={filter:`blur(${t}px)`},n.blur=o}n.start=`${o}${l} ${a}`,n.end=`${s} ${r}`,i.push(n)}if("mouse"===e.type){const o=e.mouse_effect||"track",i=e.mouse_effect_direction||"opposite",n=e.mouse_effect_speed||2;let a,r,l,c,u=5*n;function s(){l=gsap.utils.mapRange(0,innerWidth,-u,u),c=gsap.utils.mapRange(0,innerHeight,-u,u)}if("tilt"===o&&(u=3*n),window.addEventListener("resize",s),s(),"track"===o){const e=function(){gsap.to(t,{xPercent:"same"===i?a:-a,yPercent:"same"===i?r:-r,ease:"none"})};gsap.ticker.add(e)}else if("tilt"===o){const e=function(){a||(a=0),r||(r=0),gsap.to(t,{rotationX:"same"===i?-r*n:r*n,rotationY:"same"===i?a*n:-a*n,ease:"none",transformPerspective:1500})};gsap.ticker.add(e)}window.addEventListener("mousemove",function(e){a=l(e.clientX),r=c(e.clientY)})}if("infinite"===e.type){const i=e.infinite_animation||"float",n=e.infinite_animation_speed||2;if("float"===i){const e=new TimelineMax({repeat:-1});e.to(t,6/n,{y:"-="+o(22,30),x:"+="+o(13,20),rotation:"-=3",ease:Power1.easeInOut}).to(t,6/n,{y:"+="+o(22,30),x:"-="+o(13,20),rotation:"+=3",ease:Power1.easeInOut}).to(t,6/n,{y:"-="+o(22,30),rotation:"+="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"+="+o(22,30),rotation:"-="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"-="+o(22,30),rotation:"+="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"+="+o(22,30),rotation:"-="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"-="+o(22,30),rotation:"+="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"+="+o(22,30),rotation:"-="+o(2,4),ease:Power1.easeInOut}).to(t,6/n,{y:"-="+o(12,20),ease:Power1.easeInOut}).to(t,6/n,{y:"+="+o(12,20),ease:Power1.easeInOut}),TweenLite.to(e,27,{ease:Power1.easeInOut})}else if("pulse"===i){const e=new TimelineMax;e.to(t,3/n,{scale:1.3,repeat:-1,yoyo:!0}),TweenLite.to(e,27,{ease:Power3.easeInOut})}else"rotate"===i?gsap.timeline().fromTo(t,{opacity:0,scale:0},{opacity:1,scale:1,duration:1,ease:"power2.out"}).fromTo(t,{rotation:0},{rotation:360,duration:10/n,repeat:-1,repeatDelay:.01,ease:"linear"},0):"wiggle"===i&&(gsap.set(t,{xPercent:-10,x:-1}),gsap.to(t,{repeat:-1,yoyo:!0,xPercent:10,duration:2/n,ease:"power1.inOut"}))}}),i.length&&i.forEach(e=>{const o={scrollTrigger:{trigger:t,scrub:0,start:e.start,end:e.end}};"y"in e&&(o.y=e.y),"x"in e&&(o.x=e.x),"opacity"in e&&(o.opacity=e.opacity),"scale"in e&&(o.scale=e.scale),"rotation"in e&&(o.rotation=e.rotation),"blur"in e&&(o.filter=`blur(${e.blur}px)`),gsap.set(t,e.from),gsap.to(t,o)})})}function o(e,t){return(e+(t-e))*Math.random()}t(),e("body").on("avada-studio-preview-done",function(){t()})}(jQuery);