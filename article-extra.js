// GeldPilot.de — article-extra.js
// FAQ_DATA: 2 Fragen pro Artikel (Key = Dateiname). SOURCE_LINKS: offizielle Quellen je Kategorie.

const FAQ_DATA = {
  "budget-50-30-20-regel.html": [
    {q: "Ist die 50-30-20-Regel für jedes Einkommen geeignet?", a: "Nicht immer exakt — bei hohen Mietkosten oder niedrigem Einkommen lässt sich die Aufteilung anpassen, etwa auf 60-25-15. Wichtig ist, dass überhaupt ein fester Sparanteil existiert."},
    {q: "Zählt die Kreditrate zu den Fixkosten oder zum Sparen?", a: "Die Mindestrate zählt zu den Fixkosten, da sie vertraglich verpflichtend ist. Zusätzliche, freiwillige Tilgungen zählen zum Sparanteil (20 %)."}
  ],
  "notgroschen-ruecklage.html": [
    {q: "Reicht ein Notgroschen von 1.000 Euro aus?", a: "Für die ersten kleinen Notfälle ja — als vollständige Absicherung wird aber die Zielspanne von drei bis sechs Monatsausgaben empfohlen."},
    {q: "Sollte der Notgroschen verzinst angelegt werden?", a: "Ja, idealerweise auf einem Tagesgeldkonto, das täglich verfügbar bleibt — nicht in Aktien oder Festgeld mit Kündigungsfrist."}
  ],
  "dispo-vs-ratenkredit.html": [
    {q: "Ist der Dispokredit immer schlecht?", a: "Nein, für eine kurze Überbrückung von wenigen Tagen ist er praktisch. Problematisch wird er erst bei dauerhafter Nutzung über mehrere Monate."},
    {q: "Wie erkenne ich, ob eine Umschuldung sich lohnt?", a: "Wenn der Dispo durchgehend über ein bis zwei Monatsgehälter hinweg genutzt wird, lohnt sich meist ein Vergleich mit einem günstigeren Ratenkredit."}
  ],
  "etf-sparplan-anfaenger.html": [
    {q: "Ab welchem Betrag kann ich einen ETF-Sparplan starten?", a: "Viele Broker ermöglichen den Einstieg bereits ab 25 Euro oder sogar 1 Euro monatlich."},
    {q: "Was passiert, wenn die Kurse fallen?", a: "Bei einem Sparplan wird automatisch mehr Anteile für den gleichen Betrag gekauft — kurzfristige Rückgänge gehören zur normalen Schwankung und sind bei langem Anlagehorizont kein Grund zum Verkauf."}
  ],
  "versicherungen-wichtig.html": [
    {q: "Ist eine Haftpflichtversicherung wirklich notwendig?", a: "Ja, sie gilt als eine der wichtigsten Versicherungen, da Personenschäden unbegrenzt hoch ausfallen können."},
    {q: "Brauche ich eine Handyversicherung?", a: "In den meisten Fällen nicht — die Beiträge stehen oft in keinem guten Verhältnis zum Reparatur- oder Neuwert des Geräts."}
  ],
  "steuererklaerung-angestellte.html": [
    {q: "Lohnt sich eine Steuererklärung immer?", a: "In den meisten Fällen ja — viele Angestellte erhalten eine Erstattung, wenn ihre Werbungskosten über der Pauschale liegen."},
    {q: "Wie lange kann ich eine freiwillige Steuererklärung rückwirkend abgeben?", a: "In der Regel bis zu vier Jahre rückwirkend, bei freiwilliger Abgabe."}
  ],
  "miete-vs-kaufen.html": [
    {q: "Ab wann lohnt sich ein Immobilienkauf eher als Mieten?", a: "Meist ab einem Zeithorizont von zehn Jahren oder mehr, da sich die hohen Kaufnebenkosten erst über längere Zeit relativieren."},
    {q: "Sind Mietzahlungen wirklich 'verlorenes Geld'?", a: "Nicht ganz — auch Eigentum verursacht laufende Kosten wie Zinsen und Instandhaltung, die keinen Vermögensaufbau darstellen."}
  ],
  "kreditkarte-vs-debitkarte.html": [
    {q: "Brauche ich überhaupt eine Kreditkarte?", a: "Für Reisen und Online-Käufe mit Käuferschutz ist sie oft praktisch — im Alltag reicht für viele die Debitkarte aus."},
    {q: "Ist eine kostenlose Kreditkarte genauso gut?", a: "Für die meisten Alltagsbedürfnisse ja — wichtig ist, auf Fremdwährungsgebühren und die Abrechnungsart zu achten."}
  ],
  "altersvorsorge-3-saeulen.html": [
    {q: "Reicht die gesetzliche Rente allein aus?", a: "Für die meisten nicht vollständig — eine Ergänzung durch betriebliche und private Vorsorge wird empfohlen."},
    {q: "Was ist der wichtigste erste Schritt?", a: "Die eigene Renteninformation prüfen, um die tatsächliche Vorsorgelücke realistisch einzuschätzen."}
  ],
  "tagesgeld-vs-festgeld.html": [
    {q: "Kann ich bei Festgeld vorzeitig an mein Geld?", a: "In der Regel nicht ohne Weiteres — Festgeld ist für die vereinbarte Laufzeit gebunden."},
    {q: "Ist mein Geld auf Tagesgeld sicher?", a: "Ja, innerhalb der EU sind Einlagen bis 100.000 Euro pro Kunde und Bank gesetzlich abgesichert."}
  ],
  "schufa-score-verbessern.html": [
    {q: "Verschlechtert eine Selbstauskunft meinen Score?", a: "Nein, die kostenlose Datenübersicht nach Art. 15 DSGVO hat keinen Einfluss auf den Score."},
    {q: "Wie schnell verbessert sich der Score?", a: "Meist schrittweise über mehrere Monate zuverlässigen Zahlungsverhaltens, nicht sofort."}
  ],
  "steuerklasse-wechseln.html": [
    {q: "Ändert die Steuerklasse die Jahressteuerlast?", a: "Nein, sie beeinflusst nur die monatliche Verteilung des Nettoeinkommens — die Jahressteuerschuld wird über die Steuererklärung final berechnet."},
    {q: "Wie oft kann ich die Steuerklasse wechseln?", a: "Grundsätzlich einmal im Jahr, formlos oder über das entsprechende Formular beim Finanzamt."}
  ],
  "schulden-abbauen-plan.html": [
    {q: "Schneeball- oder Lawinen-Methode — was ist besser?", a: "Mathematisch spart die Lawinen-Methode mehr Zinsen, aber die Methode, die man tatsächlich durchhält, ist meist die bessere Wahl."},
    {q: "Sollte ich während des Schuldenabbaus weiter sparen?", a: "Ein kleiner Notgroschen von 300-500 Euro hilft, neue Schulden durch unerwartete Ausgaben zu vermeiden."}
  ],
  "kfz-versicherung-wechseln.html": [
    {q: "Wann kann ich meine Kfz-Versicherung kündigen?", a: "In der Regel bis zum 30. November zum Jahresende, oder nach einer Beitragserhöhung per Sonderkündigungsrecht."},
    {q: "Lohnt sich Vollkasko bei einem älteren Auto?", a: "Oft nicht mehr — die Prämie kann höher ausfallen als der potenzielle Schadenersatz bei geringem Zeitwert."}
  ],
  "elterngeld-beantragen.html": [
    {q: "Kann Elterngeld rückwirkend beantragt werden?", a: "Nur für maximal drei Monate vor der Antragstellung — ein früher Antrag ist daher wichtig."},
    {q: "Was ist der Unterschied zu ElterngeldPlus?", a: "ElterngeldPlus zahlt über einen doppelt so langen Zeitraum halbe Monatsbeträge und eignet sich besonders bei Teilzeitarbeit."}
  ],
  "inflation-erspartes-schuetzen.html": [
    {q: "Sollte ich meinen Notgroschen auch investieren?", a: "Nein, er sollte kurzfristig verfügbar bleiben — der reale Kaufkraftverlust wird hier bewusst zugunsten der Sicherheit in Kauf genommen."},
    {q: "Schützt eine Immobilie vor Inflation?", a: "Bei Eigennutzung teilweise, da steigende Mietkosten entfallen — ein vollständiger Inflationsschutz ist sie aber nicht."}
  ],
  "gehaltsverhandlung-tipps.html": [
    {q: "Wann ist der beste Zeitpunkt für eine Gehaltsverhandlung?", a: "Nach einem sichtbaren Erfolg oder im regulären Mitarbeitergespräch — nicht direkt nach schlechten Unternehmenszahlen."},
    {q: "Welches Argument überzeugt am wenigsten?", a: "Ein Vergleich mit dem Gehalt eines Kollegen wirkt meist weniger überzeugend als der eigene, messbare Beitrag."}
  ],
  "kredit-umschulden.html": [
    {q: "Was ist eine Vorfälligkeitsentschädigung?", a: "Eine Ausgleichszahlung an die Bank für entgangene Zinserträge bei vorzeitiger Kreditablösung."},
    {q: "Lohnt sich eine Umschuldung immer bei gesunkenen Zinsen?", a: "Nur, wenn die Zinsersparnis über die Restlaufzeit die Vorfälligkeitsentschädigung und Gebühren übersteigt."}
  ],
  "wohngeld-beantragen.html": [
    {q: "Steht Wohngeld nur Mietern zu?", a: "Nein, auch Eigentümer können einen vergleichbaren Lastenzuschuss erhalten."},
    {q: "Wo stelle ich den Antrag?", a: "Bei der zuständigen Wohngeldstelle, meist beim Bezirks- oder Stadtamt am Wohnort."}
  ],
  "bafoeg-studienfinanzierung.html": [
    {q: "Muss ich das komplette BAföG zurückzahlen?", a: "Nein, nur die Hälfte als zinsloses Darlehen bis zu einer gesetzlichen Höchstgrenze — die andere Hälfte ist ein Zuschuss."},
    {q: "Wird BAföG rückwirkend gezahlt?", a: "Nein, grundsätzlich nicht vor dem Monat der Antragstellung — ein früher Antrag lohnt sich daher."}
  ],
  "kurzarbeitergeld-erklaert.html": [
    {q: "Ersetzt Kurzarbeitergeld das volle Gehalt?", a: "Nein, nur einen Teil des durch die Arbeitszeitverkürzung entfallenen Nettoentgelts."},
    {q: "Kann ich während der Kurzarbeit nebenbei arbeiten?", a: "Unter bestimmten Bedingungen ist ein begrenzter Hinzuverdienst möglich, sollte aber vorher abgeklärt werden."}
  ],
  "riester-rente-lohnt-sich.html": [
    {q: "Für wen lohnt sich Riester besonders?", a: "Vor allem für Personen mit mehreren kindergeldberechtigten Kindern und geringem Eigenbeitrag."},
    {q: "Was passiert bei einer Kündigung?", a: "Bereits erhaltene staatliche Zulagen müssen zurückgezahlt werden — eine Kündigung ist daher meist ungünstig."}
  ],
  "ruerup-rente-selbststaendige.html": [
    {q: "Kann ich das Kapital vor der Rente auszahlen lassen?", a: "Nein, die Auszahlung erfolgt ausschließlich als monatliche Rente ab Rentenbeginn."},
    {q: "Für wen eignet sich die Rürup-Rente am meisten?", a: "Für Selbstständige mit hohem, stabilem Einkommen, die den Steuervorteil nutzen möchten."}
  ],
  "baufinanzierung-zinsbindung.html": [
    {q: "Was passiert nach Ablauf der Zinsbindung?", a: "Für die verbleibende Restschuld wird eine Anschlussfinanzierung zu dann aktuellen Marktzinsen nötig."},
    {q: "Ist ein niedriger Tilgungssatz sinnvoll?", a: "Er senkt die monatliche Rate, verlängert aber die Laufzeit und erhöht die Zinskosten insgesamt."}
  ],
  "nebenkostenabrechnung-pruefen.html": [
    {q: "Welche Kosten sind nicht umlagefähig?", a: "Reparatur- und Instandhaltungskosten sowie Verwaltungskosten des Vermieters gehören grundsätzlich nicht zu den umlagefähigen Nebenkosten."},
    {q: "Habe ich ein Recht auf Belegeinsicht?", a: "Ja, Mieter dürfen die der Abrechnung zugrunde liegenden Belege beim Vermieter einsehen."}
  ],
  "erbschaftssteuer-freibetraege.html": [
    {q: "Wie oft kann ich den Freibetrag nutzen?", a: "Freibeträge zwischen denselben Personen lassen sich alle zehn Jahre erneut vollständig nutzen."},
    {q: "Zahlen unverheiratete Partner mehr Erbschaftssteuer?", a: "Ja, ohne Trauschein gilt nur ein sehr geringer Freibetrag und ein höherer Steuersatz."}
  ],
  "kryptowaehrungen-risiken.html": [
    {q: "Sind Kryptowährungen durch eine Einlagensicherung geschützt?", a: "Nein, anders als Bankguthaben gibt es kein gesetzliches Sicherungssystem."},
    {q: "Muss ich Kryptogewinne versteuern?", a: "Gewinne können je nach Haltedauer und Höhe steuerpflichtig sein — Kauf- und Verkaufszeitpunkte sollten dokumentiert werden."}
  ],
  "verwahrentgelt-vermeiden.html": [
    {q: "Ab welchem Betrag verlangen Banken Verwahrentgelt?", a: "Das unterscheidet sich stark je nach Bank — ein Blick ins Preis- und Leistungsverzeichnis der eigenen Bank schafft Klarheit."},
    {q: "Hilft ein Bankwechsel gegen Verwahrentgelt?", a: "Möglicherweise, da nicht jede Bank die gleiche Höhe oder überhaupt ein Verwahrentgelt erhebt."}
  ],
  "umzug-kosten-fristen.html": [
    {q: "Wie lange ist die gesetzliche Kündigungsfrist als Mieter?", a: "In der Regel drei Monate zum Monatsende, unabhängig von der bisherigen Mietdauer."},
    {q: "Warum ist die doppelte Kaution ein Problem?", a: "Die alte Kaution wird oft erst Wochen nach Auszug zurückgezahlt, während die neue meist sofort fällig ist."}
  ],
  "kindergeld-beantragen.html": [
    {q: "Endet Kindergeld automatisch mit der Volljährigkeit?", a: "Nein, es läuft bei Schule, Ausbildung oder Studium in der Regel weiter, sofern rechtzeitig ein Nachweis eingereicht wird."},
    {q: "Kindergeld oder Kinderfreibetrag — was ist besser?", a: "Das Finanzamt prüft das automatisch; für die meisten Familien bleibt das Kindergeld die günstigere Variante."}
  ]
};

const SOURCE_LINKS = {
  "Budget": [["Verbraucherzentrale", "https://www.verbraucherzentrale.de"]],
  "Sparen": [["Deutsche Bundesbank", "https://www.bundesbank.de"], ["BaFin", "https://www.bafin.de"]],
  "Kredite": [["BaFin", "https://www.bafin.de"], ["Schufa", "https://www.schufa.de"]],
  "Geldanlage": [["BaFin", "https://www.bafin.de"], ["Deutsche Bundesbank", "https://www.bundesbank.de"]],
  "Versicherungen": [["BaFin", "https://www.bafin.de"], ["Verbraucherzentrale", "https://www.verbraucherzentrale.de"]],
  "Steuern": [["Bundesministerium der Finanzen", "https://www.bundesfinanzministerium.de"], ["ELSTER", "https://www.elster.de"]],
  "Wohnen": [["Deutscher Mieterbund", "https://www.mieterbund.de"]],
  "Bezahlen": [["BaFin", "https://www.bafin.de"]],
  "Altersvorsorge": [["Deutsche Rentenversicherung", "https://www.deutsche-rentenversicherung.de"]],
  "Schulden": [["Verbraucherzentrale", "https://www.verbraucherzentrale.de"]],
  "Familie": [["Bundesagentur für Arbeit — Familie", "https://www.arbeitsagentur.de/familie-und-kinder"]],
  "Bildung": [["BAföG", "https://www.bafög.de"]],
  "Arbeit": [["Bundesagentur für Arbeit", "https://www.arbeitsagentur.de"]]
};
