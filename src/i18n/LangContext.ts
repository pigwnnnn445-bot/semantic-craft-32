import { createContext, useContext } from "react";
import { translations, type Lang, type Translations } from "./translations";

export const LangContext = createContext<{ lang: Lang; t: Translations; otherLangPath: string }>({
  lang: "en",
  t: translations.en,
  otherLangPath: "/zh",
});

export function useLang() {
  return useContext(LangContext);
}
