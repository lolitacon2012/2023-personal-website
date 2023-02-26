import { pick } from "accept-language-parser";
import { isServer } from "solid-js/web";
import { parseCookie } from "solid-start";
import { useRequest } from "solid-start/server";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "~/config";

export const getLocale = () => {
    if (isServer) {
        const { request } = useRequest();
        const cookie = parseCookie(request.headers.get('cookie') || '');
        const languageCookie = cookie?.locale;
        if (SUPPORTED_LOCALES.indexOf(languageCookie) >= 0) {
            return languageCookie;
        } else {
            const exactLocale = pick(SUPPORTED_LOCALES, request.headers.get('accept-language') || '') || DEFAULT_LOCALE;
            return exactLocale
        }
    } else {
        const cookie = parseCookie(document.cookie || '');
        const languageCookie = cookie?.locale;
        if (SUPPORTED_LOCALES.indexOf(languageCookie) >= 0) {
            return languageCookie;
        } else {
            const exactLocale = pick(SUPPORTED_LOCALES, window.navigator.languages.join(',') || '') || DEFAULT_LOCALE;
            return exactLocale
        }
    }
}

export const getHtmlLang = () => {
    const locale = getLocale();
    return locale;
}