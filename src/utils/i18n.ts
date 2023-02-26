import fs from "fs";
import path from "path";
import { isServer } from "solid-js/web"
import { createMemo } from "solid-js";
import { SUPPORTED_LOCALES } from "~/config";
import { getLocale } from "./xtGlobal";


export const t = (key: string): string => {
    if (isServer) {
        const ssrI18n = createMemo(() => {
            if (isServer) {
                const result = {} as {
                    [key: string]: {
                        [key: string]: string;
                    }
                };
                console.log("Load i18n files on server...")
                SUPPORTED_LOCALES.forEach(locale => {
                    result[locale] = JSON.parse(fs.readFileSync(path.resolve(`./public/i18n/${locale
                        }.json`), 'utf-8'))
                })
                return result
            } else {
                return {}
            }
        })
        return ssrI18n()[getLocale()][key] || key;
    } else {
        return window.__xt_i18n?.[key] || key;
    }
}