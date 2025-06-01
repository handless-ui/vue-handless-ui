import { defineComponent, h, ref, watch } from 'vue';

export default defineComponent({
    name: 'UiInput',
    props: {
        modelValue: {
            type: [String, Number]
        },
        format: {
            type: Function
        },
        pipe: {
            type: Function
        }
    },
    emits: {
        "update:modelValue": (value: String | Number) => value
    },
    setup(props, { emit }) {

        // 输入格式化
        let formatFun = props.format || ((input: any) => input);

        // 输入控制
        let pipeFun = props.pipe || ((newInput: any, oldInput: any) => newInput);

        let inputValue = ref("");
        let isInput = ref(false);

        watch(() => props.modelValue, newValue => {
            let newInput = pipeFun(newValue, inputValue.value || "");
            inputValue.value = newInput;

            if (newValue !== newInput) {
                emit("update:modelValue", newInput || "");
            }
        }, {
            immediate: true
        });

        return () => {
            return h("input", {
                value: isInput.value ? inputValue.value : formatFun(inputValue.value),
                type: "text",
                class: ["ui-input"],
                onFocus() {
                    isInput.value = true;
                },
                onBlur() {
                    isInput.value = false;
                },
                onInput(event: any) {
                    let newInput = pipeFun(event.target.value, inputValue.value);
                    inputValue.value = newInput;
                    emit("update:modelValue", newInput);

                    if (event.target.value != newInput) {
                        event.target.value = newInput;
                    }
                }
            });
        };
    }
});