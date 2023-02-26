import { LOCALE_DATA } from "~/config";
import Cookies from 'js-cookie';
import { For } from "solid-js";


const setLanguage = (localeCode: string) => {
    Cookies.set('locale', localeCode);
    window.location.reload();
}

const Header = () => {
    return <div><For each={Object.keys(LOCALE_DATA)}>{(localeItemKey) => {
        const localeConfig = LOCALE_DATA[localeItemKey];
        return <button onClick={() => {
            setLanguage(localeItemKey)
        }}>{localeConfig.textName}</button>
    }}</For></div>
}

export default Header;