import React from "react";
import { useI18n } from "../context/I18nRouterContext.jsx";

export default function Header() {
   const { t } = useI18n();
   return (
      <section className="header">
         <p>{t.header.content}</p>
      </section>
   );
}
