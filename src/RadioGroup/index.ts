import { defineComponent, h, renderSlot, provide, onMounted, watch } from 'vue';

export default defineComponent({
    name: 'UiRadioGroup',
    props: {
        modelValue: {
            type: String
        }
    },
    emits: {
        "update:modelValue": (value: string) => value
    },
    setup(props, { slots, emit }) {

        let childsAction = {};
        provide("updateAction", (name: string, doback: (isChecked: boolean) => void) => {
            childsAction[name] = doback;
        });

        let updateClass = (newValue: string) => {
            for (let key in childsAction) {
                if (childsAction[key]) {
                    childsAction[key](key == newValue);
                }
            }
        };

        provide("updateModel", (newValue: string) => {
            updateClass(newValue);
            emit("update:modelValue", newValue);
        });

        onMounted(() => {
            if (props.modelValue) updateClass(props.modelValue);
        });

        watch(() => props.modelValue, newValue => {
            updateClass(newValue || "");
        });

        return () => {
            return h("ui-radio-group", {
                class: ["ui-radio-group"],
            }, [renderSlot(slots, "default", {})]);
        };
    }
});