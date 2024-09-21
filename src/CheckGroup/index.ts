import { defineComponent, h, renderSlot, provide, onMounted, watch } from 'vue';

export default defineComponent({
    name: 'UiCheckGroup',
    props: {
        modelValue: {
            type: Array<string>
        }
    },
    emits: {
        "update:modelValue": (value: Array<string>) => value
    },
    setup(props, { slots, emit }) {

        let newValues = props.modelValue || [];

        let childsAction = {};
        provide("updateAction", (name: string, doback: (isChecked: boolean) => void) => {
            childsAction[name] = doback;
        });

        let updateClass = () => {
            for (let key in childsAction) {
                if (childsAction[key]) {
                    childsAction[key](newValues.indexOf(key) > -1);
                }
            }
        };

        provide("updateModel", (newValue: string) => {

            let index = newValues.indexOf(newValue);
            if (index > -1) {
                newValues.splice(index, 1);
            } else {
                newValues.push(newValue);
            }

            updateClass();
            emit("update:modelValue", [...newValues]);
        });

        onMounted(() => {
            if (newValues.length > 0) updateClass();
        });

        watch(() => props.modelValue, () => {
            updateClass();
        });

        return () => {
            return h("ui-check-group", {
                class: ["ui-check-group"],
            }, [renderSlot(slots, "default", {})]);
        };
    }
});