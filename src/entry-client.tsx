import { mount, StartClient } from "solid-start/entry-client";
import { getLocale } from "./utils/xtGlobal";

mount(() => {
    // Init i18n
    const locale = getLocale();
    fetch(`/i18n/${locale}.json`).then((res) => res.json()).then((result) => {
        window.__xt_i18n = result;
    })
    return <StartClient />
}, document);
