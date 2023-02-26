export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = ['zh-Hans', 'en'];

type LocaleConfig = {
    textName: string
}
export const LOCALE_DATA = {
    'zh-Hans': {
        textName: '中文'
    },
    'en': {
        textName: 'English'
    }
} as { [key: string]: LocaleConfig }