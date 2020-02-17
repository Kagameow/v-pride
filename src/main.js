import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.directive('pride', {
    bind(el, binding) {
        const applyRainbowStyling = (el) => {
            el.style.webkitBackgroundClip = "text";
            el.style.color = "transparent";
            el.style.backgroundImage = "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)";
        };
        if (binding.modifiers['gradient'] || ['animatedGradient']) {
            applyRainbowStyling(el);
            if (binding.value) {
                el.style.backgroundPosition = binding.value + "px";
            }
            if (binding.modifiers['animatedGradient']) {
                el.style.backgroundSize = "800% 800%";
                el.style.backgroundImage = "repeating-linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red, violet)";
                let rainbowAnimation = [
                    {backgroundPosition: '0% 50%'},
                    {backgroundPosition: '100% 25%', offset: 0.5},
                    {backgroundPosition: '0% 50%'}
                ];
                let rainbowTiming = {
                    duration: 8000,
                    iterations: Infinity,
                    easing: "ease"
                };
                el.animate(
                    rainbowAnimation,
                    rainbowTiming
                );
            }
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
