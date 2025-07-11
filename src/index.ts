import type { App } from "vue";

import UiRadioGroup from "./RadioGroup";
import UiRadio from "./Radio";
import UiCheckGroup from "./CheckGroup";
import UiCheck from "./Check";
import UiSwitch from "./Switch";
import UiPopup from "./Popup";
import UiInput from "./Input";

// 导出单独组件
export {
    UiRadioGroup, UiRadio,
    UiCheckGroup, UiCheck,
    UiSwitch,
    UiPopup,
    UiInput
};

// 实现 install 方法
export default {
    install(app: App) {
        app.component(UiRadioGroup.name as string, UiRadioGroup); app.component(UiRadio.name as string, UiRadio);
        app.component(UiCheckGroup.name as string, UiCheckGroup); app.component(UiCheck.name as string, UiCheck);
        app.component(UiSwitch.name as string, UiSwitch);
        app.component(UiPopup.name as string, UiPopup);
        app.component(UiInput.name as string, UiInput);
    }
}