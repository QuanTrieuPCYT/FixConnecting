import { getModule } from "enmity/metro";
import {get} from 'enmity/api/settings';
import manifest, {name as plugin_name} from '../manifest.json';

export function getStoreByName(o) {
    return getModule(n => {
        var m;
        return ((m = n.constructor) == null ? void 0 : m.displayName) === o
    })
}

export function isIconBold() {
    if (!get(plugin_name, "bold_toast_icon", true)) return 'check'; else return 'ic_checkmark';
}