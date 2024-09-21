import { defineComponent, h, renderSlot, ref, watch } from 'vue';
import { throttle } from "oipage/corejs/throttle/index";

export default defineComponent({
    name: 'UiSwitch',
    props: {
        modelValue: {
            type: Boolean
        }
    },
    emits: {
        "update:modelValue": (value: boolean) => value
    },
    setup(props, { slots, emit }) {

        let isOn = ref(props.modelValue || false);

        watch(() => props.modelValue, newValue => {
            isOn.value = newValue;
        });

        return () => {
            return h("ui-switch", {
                class: ["ui-switch", isOn.value ? "on" : "off"],
                style: {
                    cursor: "pointer",
                    userSelect: "none"
                },
                onClick: throttle(() => {
                    isOn.value = !isOn.value;
                    emit("update:modelValue", isOn.value);
                }, {
                    keep: true,
                    opportunity: "begin"
                })
            }, renderSlot(slots, "default", {}));
        };
    }
});