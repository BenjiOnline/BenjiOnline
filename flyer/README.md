# Flyere – Våtromskonsulenten

Redigerbare flyermaler i HTML som skrives ut til trykklar A4-PDF.
Samme visuelle stil som nettsiden: mørk marineblå, Barlow Condensed-titler,
grønn aksent for Second Opinion og gull for Trygt Bad Komplett.

| Fil | Flyer | Aksent |
|---|---|---|
| `flyer-ekspert.html` | Din frittstående våtromsekspert | Blå |
| `flyer-hvorfor.html` | Hvorfor velge oss? | Blå |
| `flyer-sluttbefaring.html` | Sluttbefaring og Rapport (6 250,-) | Blå |
| `flyer-trygtbad.html` | Trygt Bad Kontroll (6 250,-) | Blå |
| `flyer-secondopinion.html` | Second Opinion (8 500,-) | Grønn |
| `flyer-komplett.html` | Trygt Bad Komplett (12 500,-) | Gull |

`flyer-base.css` er felles stilark for tjeneste-flyerne.
Fontene ligger lokalt i `fonts/`, så alt fungerer uten nettilgang.

## Redigere og lage ny PDF

1. Endre tekst/pris direkte i HTML-filen.
2. Åpne filen i Chrome/Edge og velg **Skriv ut → Lagre som PDF** med:
   - Papirstørrelse: A4, Marger: Ingen, **Bakgrunnsgrafikk: PÅ**

PDF-ene i denne mappen er ferdig genererte versjoner av malene.
