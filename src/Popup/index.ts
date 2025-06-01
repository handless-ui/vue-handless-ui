import { defineComponent, h, renderSlot, ref, watch, nextTick } from 'vue';

export default defineComponent({
    name: 'UiPopup',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        }
    },
    emits: {
        click: () => undefined
    },
    setup(props, { slots, emit }) {

        let display = ref(false);
        let opacity = ref(0);

        watch(() => props.modelValue, (newVal) => {
            if (newVal) {
                display.value = true;
                nextTick(() => {
                    setTimeout(() => {
                        opacity.value = 1;
                    }, 50);
                });
            } else {
                opacity.value = 0;
                setTimeout(() => {
                    display.value = false;
                }, 300);
            }
        }, {
            // 表示同时监听初始化时的props的show的意思
            immediate: true,
        });

        return () => {
            return h("ui-popup", {
                class: ["ui-popup"],
                style: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: "9999999",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-out",
                    transitionProperty: "opacity",
                    opacity,
                    display: display.value ? 'block' : 'none'
                },
                onClick() {
                    emit("click");
                }
            }, renderSlot(slots, "default", {}));
        };
    }
});