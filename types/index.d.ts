import type { App } from "vue";

declare module 'vue-handless-ui' {
    let UiRadioGroup: any
    let UiRadio: any
    let UiCheckGroup: any
    let UiCheck: any
    let UiSwitch: any
    let UiPopup: any
    let UiInput: any
}

export default class {
    install(app: App): void
}