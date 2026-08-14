# Våtromskonsulenten – nettside

Statisk nettside for Våtromskonsulenten – «Din fagperson på våtrom».
Ingen byggverktøy eller rammeverk: ren HTML, CSS og litt JavaScript.

## Sider

| Fil | Side |
|---|---|
| `index.html` | Landingsside |
| `tjenester.html` | Tjenester (Trygt Bad Kontroll, Sluttbefaring og Rapport, Second Opinion) |
| `om-oss.html` | Om oss |
| `kontakt.html` | Kontakt med skjema |

## Se siden lokalt

Åpne `index.html` i nettleseren, eller kjør en enkel server:

```bash
python3 -m http.server 8000
# åpne http://localhost:8000
```

## Se siden fra mobilen (uten PC)

Siden publiseres til GitHub Pages av `.github/workflows/pages.yml`. Da får du
en vanlig nettadresse du kan åpne på telefonen mens du jobber – PC-en trenger
ikke å stå på.

Slik slår du det på (én gang):

1. Gå til repoet på github.com → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, velg **GitHub Actions**.
3. Adressen blir `https://<brukernavn>.github.io/BenjiOnline/`.

Etter det publiseres siden på nytt automatisk ved hver push til
standardbranchen. Vil du forhåndsvise en annen branch, kjør workflowen manuelt:
**Actions** → *Publiser forhåndsvisning til GitHub Pages* → **Run workflow** →
velg branchen.

Merk at GitHub Pages er offentlig tilgjengelig for alle som har adressen.

## Før lansering

1. **Om oss-teksten**: Bytt ut alt i `[KLAMMER]` i `om-oss.html` med reell info
   (navn, erfaring, bakgrunn, sertifiseringer), og fjern den blå plassholder-boksen.
2. **Kontaktskjemaet**: Opprett gratis konto på [formspree.io](https://formspree.io),
   lag et skjema, og bytt ut `FORM_ID` i `kontakt.html` med den ekte skjema-ID-en.
   Frem til da viser skjemaet en beskjed om å ringe/sende e-post i stedet.

## Hosting

Siden kan hostes gratis på GitHub Pages, Netlify eller Vercel – pek deretter
domenet `vatromskonsulenten.no` til hostingtjenesten.
