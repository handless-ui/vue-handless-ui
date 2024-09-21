import { defineComponent, h, renderSlot, ref, inject, onUnmounted } from 'vue';

export default defineComponent({
    name: 'UiRadio',
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
            return h("ui-radio", {
                class: ["ui-radio", isChecked.value ? "checked" : "unchecked"],
                style: {
                    cursor: "pointer",
                    userSelect: "none"
                },
                onClick() {
                    if (!isChecked.value) updateModel(props.value);
                }
            }, renderSlot(slots, "default", {}));
        };
    }
});