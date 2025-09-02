import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../context/I18nRouterContext.jsx";
import "../App.css";

export default function Nav() {
   const { lang, t, buildPath } = useI18n();
   return (
      <nav
         className="nav"
         style={{ display: "flex", gap: 12, marginBottom: 16 }}
      >
         <Link to={buildPath(lang)}>{t.nav.home}</Link>
         <Link to={buildPath(lang, "about")}>{t.nav.about}</Link>
         <Link to={buildPath(lang, "contact")}>{t.nav.contact}</Link>
      </nav>
   );
}
