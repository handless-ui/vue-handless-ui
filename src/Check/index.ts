import { defineComponent, h, renderSlot, ref, inject, onUnmounted } from 'vue';
import { throttle } from "oipage/corejs/throttle/index";

export default defineComponent({
    name: 'UiCheck',
    props: {
        value: {
            type: String
        }
    },
    setup(props, { slots }) {
        let updateModel = inject("updateModel") as Function;
        let updateAction = inject("updateAction") as Function;

        let isChecked = ref(false);

        updateAction(props.value, (_isChecked: boolean) => {
            isChecked.value = _isChecked;
        });

        onUnmounted(() => {
            updateAction(props.value, null);
        });

        return () => {
            return h("ui-check", {
                class: ["ui-check", isChecked.value ? "checked" : "unchecked"],
                style: {
                    cursor: "pointer",
                    userSelect: "none"
                },
                onClick: throttle(() => {
                    updateModel(props.value);
                }, {
                    keep: true,
                    opportunity: "begin"
                })
            }, renderSlot(slots, "default", {}));
        };
    }
});