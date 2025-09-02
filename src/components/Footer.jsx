import React from "react";
import { useI18n } from "../context/I18nRouterContext.jsx";

export default function Footer() {
   const { t } = useI18n();
   return (
      <section>
         <p>{t.footer.content}</p>
      </section>
   );
}
