import React from "react";
import { useI18n } from "../context/I18nRouterContext.jsx";

export default function Contact() {
   const { t } = useI18n();
   return (
      <section>
         <h2>{t.contact.title}</h2>
         <p>{t.contact.content}</p>
      </section>
   );
}
