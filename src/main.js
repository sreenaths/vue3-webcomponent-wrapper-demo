import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import Counter from "./components/Counter.vue";

const webComponent = wrapper(Counter, createApp, h);
window.customElements.define("demo-counter", webComponent);
