# Status – Våtromskonsulenten (pause per august 2026)

Prosjektet er satt på pause. Alt arbeid ligger i dette repoet på branchen
`claude/website-friend-concept-8ebsfm` (repoets standardbranch).

## Hva som er ferdig

- **Nettside** med fire sider (`index.html`, `tjenester.html`, `om-oss.html`,
  `kontakt.html`) og fem tjenester med faste priser. Mørk stil basert på
  flyerne, mobiloptimalisert og testet ned til iPhone 13 mini (375px).
  Favicon, theme-color og Open Graph-metadata er på plass.
- **Flyermaler** i `flyer/` – sju redigerbare HTML-maler med trykklare
  A4-PDF-er (se `flyer/README.md` for bruksanvisning). To skrivefeil fra
  original-flyerne er rettet i malene.
- **Delbar forhåndsvisning** (klikkbar versjon av hele siden):
  https://claude.ai/code/artifact/90045936-5e0d-4d58-894f-9135d3025c4d

## Gjenstår før lansering

1. **Kontaktskjema:** Opprett gratis konto på formspree.io og bytt ut
   `FORM_ID` i `kontakt.html` (oppskrift i `README.md`).
2. **Hosting:** Legg siden på Netlify / Vercel / GitHub Pages og pek
   domenet `vatromskonsulenten.no` dit.
3. **Innholdssjekk:** Eieren bør bekrefte faktapåstandene på Om oss-siden
   (200+ våtrom, våtromskurs, uavhengig våtromskontrollør) og ev. legge
   til navn/bilde.
4. **Valgfritt:** Rette skrivefeilene i de originale fotoflyerne
   («kostbare beslutninger» og «bgg» → «deg»), og legge ekte bilder fra
   befaringer inn på nettsiden.

## Se siden lokalt

```bash
python3 -m http.server 8000
# åpne http://localhost:8000
```
