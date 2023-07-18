import { Container } from "@mui/material";
import { PiDotOutlineDuotone } from "react-icons/pi";
import { useRef, useEffect } from "react";

const Datenschutz = () => {
  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={divRef} className="bg-white py-14">
      <Container>
        <h1 className="text-[32px] md:text-[56px] font-bold border-b-8 pb-2 border-yellow-500 w-24">Datenschutzerklärung</h1>
        <div className="mt-10 flex flex-col gap-2 font-semibold">
          <span className="text-lg">Präambel</span>
          <p className="text-black/70">
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes
            und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten
            Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
          </p>
          <div className="my-4">
            <p> Verantwortlicher</p>
            <p>Kliment Komendantov IT Dienstleistungen</p>
            <p>Hausenerstraße 18 </p>
            <p>74921 Helmstadt-Bargen</p>
            <p>Deutschland</p>
            <p> kontakt@penguhosting.com </p>
            <p> Geschäftsinhaber: Kliment Komendantov </p>
            <p> Impressum: https://penguhosting.com/impressum</p>
            <p>Datenschutzbeauftragter: datenschutz@penguhosting.com</p>
          </div>
          <div className="text-black/70">
            <h1 className="text-black text-lg">Arten der verarbeiteten Daten</h1>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Kontaktdaten (z.B., E-Mail, Telefonnummern).
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
            </p>
            <span className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
            </span>
          </div>
          <span className="my-4">Kategorien betroffener Personen Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“).</span>
          <div className="text-black/70">
            <h1 className="text-lg text-black">Zweck der Verarbeitung</h1>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Sicherheitsmaßnahmen.
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
            </p>
            <span className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} /> Reichweitenmessung/Marketing.
            </span>
          </div>
          <div className="flex flex-col my-4 gap-3 text-black/70">
            <h1 className="text-xl text-black">Verwendete Begrifflichkeiten</h1>
            <p>„Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person...</p>
            <p>„Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten...</p>
            <p>„Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen...</p>
            <p>„Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden...</p>
            <p>
              Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet, bezeichnet.
            </p>
            <p>„Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Maßgebliche Rechtsgrundlagen</h1>
            <p>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO)...</p>
            <p>Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;</p>
            <p>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;</p>
            <p>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;</p>
            <p>
              Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde, ist Art. 6 Abs.
              1 lit. e DSGVO.
            </p>
            <p>Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen Sie erhoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs. 4 DSGVO.</p>
            <p>Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9 Abs. 2 DSGVO.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-black text-xl">Sicherheitsmaßnahmen</h1>
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des Sie betreffenden Zugriffs, der Eingabe,
              Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten
              gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung
              und durch datenschutzfreundliche Voreinstellungen.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-black text-xl">Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten</h1>
            <p>
              Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern, gemeinsam Verantwortlichen oder Dritten) offenbaren, Sie an diese übermitteln oder ihnen sonst Zugriff auf die
              Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben,
              eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
            </p>
            <p>
              Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und
              darüberhinausgehend auf einer den gesetzlichen Vorgaben entsprechenden Grundlage.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-black text-xl">Übermittlungen in Drittländer</h1>
            <p>
              Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten
              Dritter oder Offenlegung, bzw. Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund
              einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich erforderlicher Übermittlung, verarbeiten oder lassen wir die Daten nur in
              Drittländern mit einem anerkannten Datenschutzniveau, zu denen die unter dem "Privacy-Shield" zertifizierten US-Verarbeiter gehören oder auf Grundlage besonderer Garantien, wie z.B. vertraglicher Verpflichtung durch sogenannte
              Standardschutzklauseln der EU-Kommission, dem Vorliegen von Zertifizierungen oder verbindlichen internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission).
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Rechte der betroffenen Personen</h1>
            <p>
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
            </p>
            <p>Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</p>
            <p>
              Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten
              zu verlangen.
            </p>
            <p>Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.</p>
            <p>Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Widerrufsrecht</h1>
            <p>Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Widerspruchsrecht</h1>
            <p>
              Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-black text-xl">Cookies und Widerspruchsrecht bei Direktwerbung</h1>
            <p>
              Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem
              Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.
            </p>
            <p>
              Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann
              z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden.
            </p>
            <p>
              Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen.
              Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden.
            </p>
            <p>
              Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von
              „First-Party Cookies“).
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <p>Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.</p>
            <p>
              Sofern wir die Nutzer um eine Einwilligung in den Einsatz von Cookies bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die
              personenbezogenen Cookies der Nutzer entsprechend den nachfolgenden Erläuterungen im Rahmen dieser Datenschutzerklärung auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und
              wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) oder sofern der Einsatz von Cookies zur Erbringung unserer vertragsbezogenen Leistungen erforderlich ist, gem. Art. 6 Abs. 1 lit. b.
              DSGVO, bzw. sofern der Einsatz von Cookies für die Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt erforderlich ist oder in Ausübung öffentlicher Gewalt erfolgt, gem. Art. 6 Abs. 1 lit. e. DSGVO, verarbeitet.
            </p>
            <p>
              Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden Sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den
              Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
            </p>
            <p>
              Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite{" "}
              <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren kann die
              Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Löschung von Daten</h1>
            <p>
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns
              gespeicherten Daten gelöscht, sobald Sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p>
              Sofern die Daten nicht gelöscht werden, weil Sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das
              gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Änderungen und Aktualisierungen der Datenschutzerklärung</h1>
            <p>
              Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen.
              Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Geschäftsbezogene Verarbeitung</h1>
            <p>Zusätzlich verarbeiten wir:</p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} />
              Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie)
            </p>
            <p className="flex items-center gap-2">
              <PiDotOutlineDuotone className="text-blue-500" size={20} />
              Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)
            </p>

            <p>von unseren Kunden, Interessenten und Geschäftspartnern zwecks Erbringung vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung und Marktforschung.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Bestellabwicklung im Onlineshop und Kundenkonto</h1>
            <p>
              Wir verarbeiten die Daten unserer Kunden im Rahmen der Bestellvorgänge in unserem Onlineshop, um ihnen die Auswahl und die Bestellung der gewählten Produkte und Leistungen, sowie deren Bezahlung und Zustellung, bzw. Ausführung
              zu ermöglichen.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Verarbeitung von Daten</h1>
            <p>
              Zu den verarbeiteten Daten gehören Bestandsdaten, Kommunikationsdaten, Vertragsdaten und Zahlungsdaten. Die Verarbeitung erfolgt zum Zweck der Erbringung von Vertragsleistungen im Rahmen des Betriebs eines Onlineshops,
              Abrechnung, Auslieferung und Kundenservice.
            </p>
            <p>Wir setzen Session Cookies für die Speicherung des Warenkorb-Inhalts und permanente Cookies für die Speicherung des Login-Status ein.</p>
            <p>
              Die Verarbeitung erfolgt zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen (z.B. Durchführung von Bestellvorgängen) und soweit gesetzlich vorgeschrieben (z.B., gesetzlich erforderliche Archivierung von
              Geschäftsvorgängen zu Handels- und Steuerzwecken).
            </p>
            <p>Die Daten werden gegenüber Dritten nur im Rahmen der Auslieferung, Zahlung oder im Rahmen gesetzlicher Erlaubnisse und Pflichten offengelegt, sowie wenn dies auf Grundlage unserer berechtigten Interessen erfolgt.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Nutzerkonten</h1>
            <p>Nutzer können optional ein Nutzerkonto anlegen, um ihre Bestellungen einzusehen. Die erforderlichen Pflichtangaben werden den Nutzern während der Registrierung mitgeteilt.</p>
            <p>
              Die Nutzerkonten sind nicht öffentlich und werden von Suchmaschinen nicht indexiert. Bei Kündigung des Nutzerkontos werden die Daten gelöscht, vorbehaltlich einer Aufbewahrungspflicht aus handels- oder steuerrechtlichen
              Gründen.
            </p>
            <p>Angaben im Kundenkonto werden bis zu dessen Löschung aufbewahrt, falls eine rechtliche Verpflichtung oder unser berechtigtes Interesse besteht (z.B., im Fall von Rechtsstreitigkeiten).</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Speicherung von IP-Adresse und Nutzerhandlungen</h1>
            <p>Bei Registrierung, erneuter Anmeldung und Inanspruchnahme unserer Onlinedienste speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung.</p>
            <p>
              Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen und dient dem Schutz vor Missbrauch und unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer es besteht eine
              gesetzliche Verpflichtung oder ein berechtigtes Interesse zur Verfolgung unserer gesetzlichen Ansprüche.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Löschung der Daten</h1>
            <p>Die Löschung der Daten erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vertraglicher Rechte oder Pflichten. Die Aufbewahrung der Daten wird alle drei Jahre auf ihre Erforderlichkeit überprüft.</p>
            <p>Im Fall einer Aufbewahrung aufgrund gesetzlicher Archivierungspflichten, erfolgt die Löschung nach Ablauf dieser Pflichten.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Agenturdienstleistungen</h1>
            <p>
              Wir verarbeiten die Daten unserer Kunden im Rahmen unserer vertraglichen Leistungen zu denen konzeptionelle und strategische Beratung, Kampagnenplanung, Software- und Designentwicklung/-beratung oder Pflege, Umsetzung von
              Kampagnen und Prozessen/Handling, Serveradministration, Datenanalyse/Beratungsleistungen und Schulungsleistungen gehören.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <p>
              Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen oder Adressen), Kontaktdaten (z.B., E-Mail, Telefonnummern), Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos), Vertragsdaten (z.B.,
              Vertragsgegenstand, Laufzeit), Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie), Nutzungs- und Metadaten (z.B. im Rahmen der Auswertung und Erfolgsmessung von Marketingmaßnahmen).
            </p>
            <p>
              Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, außer wenn diese Bestandteile einer beauftragten Verarbeitung sind. Zu den Betroffenen gehören unsere Kunden, Interessenten sowie deren Kunden,
              Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der Zweck der Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung und unserem Kundenservice. Die Rechtsgrundlagen der Verarbeitung ergeben sich aus
              Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen), Art. 6 Abs. 1 lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmaßnahmen). Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen
              erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe hin. Eine Offenlegung an Externe erfolgt nur, wenn Sie im Rahmen eines Auftrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags
              überlassenen Daten handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben einer Auftragsverarbeitung gem. Art. 28 DSGVO und verarbeiten die Daten zu keinen anderen, als den auftragsgemäßen
              Zwecken.
            </p>
            <p>
              Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten. die Erforderlichkeit der Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten
              erfolgt die Löschung nach deren Ablauf (6 J, gem. § 257 Abs. 1 HGB, 10 J, gem. § 147 Abs. 1 AO). Im Fall von Daten, die uns gegenüber im Rahmen eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir die Daten
              entsprechend den Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Externe Zahlungsdienstleister</h1>
            <p>Wir setzen externe Zahlungsdienstleister ein, über deren Plattformen die Nutzer und wir Zahlungstransaktionen vornehmen können. Zu diesen Zahlungsdienstleistern können gehören:</p>
            <ul className="text-sm">
              <li>
                <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full">PayPal</a>
              </li>
              <li>
                <a href="https://www.paysafecard.com/de-de/datenschutz/">PaySafeCard</a>
              </li>
              <li>
                <a href="https://www.klarna.com/de/datenschutz/">Klarna</a>
              </li>
              <li>
                <a href="https://stripe.com/de/privacy">Stripe</a>
              </li>
              <li>
                <a href="https://pay.amazon.com/help/201751600">AmazonPay</a>
              </li>
            </ul>
            <p>
              Im Rahmen der Erfüllung von Verträgen setzen wir die Zahlungsdienstleister auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO ein. Im Übrigen setzen wir externe Zahlungsdienstleister auf Grundlage unserer berechtigten Interessen
              gem. Art. 6 Abs. 1 lit. f DSGVO ein, um unseren Nutzern effektive und sichere Zahlungsmöglichkeiten zu bieten.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Zu den Zahlungsdienstleistern verarbeitete Daten</h1>
            <p>
              Zu den, durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die
              Vertrags-, Summen und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen
              gespeichert. D.h. wir erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung.
            </p>
            <p>
              Unter Umständen werden die Daten seitens der Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und
              Datenschutzhinweise der Zahlungsdienstleister.
            </p>
            <p>
              Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Webseiten, bzw. Transaktionsapplikationen abrufbar sind. Wir verweisen
              auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung</h1>
            <p>
              Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten, die
              wir im Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, Interessenten,
              Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also Aufgaben die der
              Aufrechterhaltung unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation
              entspricht den, bei diesen Verarbeitungstätigkeiten genannten Angaben.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.</h1>
            <p>
              Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich
              unternehmensbezogenen Daten, speichern wir grundsätzlich dauerhaft.
            </p>
            <p>
              Für die Erledigung der Buchhaltung nutzen wir den Service LexOffice der cloudbasierten Buchhaltungssoftware der Haufe-Lexware GmbH & Co. KG Ein Unternehmen der Haufe Group SE Munzinger Straße 9 79111 Freiburg. LexOffice
              verarbeitet Eingangs- und Ausgangsrechnungen sowie ggf. auch die Bankbewegungen unseres Unternehmens, um Rechnungen automatisch zu erfassen, zu den Transaktionen zu matchen und hieraus in einem teilautomatisierten Prozess die
              Finanzbuchhaltung zu erstellen. Sofern hierbei auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer effizienten
              Organisation und Dokumentation unserer Geschäftsvorgänge. Nähere Informationen zur LexOffice, der automatisierten Verarbeitung von Daten und zu den Datenschutzbestimmungen finden Sie unter{" "}
              <a href="https://www.lexoffice.de/datenschutz/">https://www.lexoffice.de/datenschutz/</a>.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Betriebswirtschaftliche Analysen und Marktforschung</h1>
            <p>
              Um unser Geschäft wirtschaftlich betreiben, Markttendenzen, Wünsche der Vertragspartner und Nutzer erkennen zu können, analysieren wir die uns vorliegenden Daten zu Geschäftsvorgängen, Verträgen, Anfragen, etc. Wir verarbeiten
              dabei Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Zahlungsdaten, Nutzungsdaten, Metadaten auf Grundlage des Art. 6 Abs. 1 lit. f. DSGVO, wobei zu den betroffenen Personen Vertragspartner, Interessenten, Kunden, Besucher
              und Nutzer unseres Onlineangebotes gehören.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Die Analysen erfolgen zum Zweck betriebswirtschaftlicher Auswertungen, des Marketings und der Marktforschung.</h1>
            <p>
              Dabei können wir die Profile der registrierten Nutzer mit Angaben, z.B. zu deren in Anspruch genommenen Leistungen, berücksichtigen. Die Analysen dienen uns zur Steigerung der Nutzerfreundlichkeit, der Optimierung unseres
              Angebotes und der Betriebswirtschaftlichkeit. Die Analysen dienen alleine uns und werden nicht extern offenbart, sofern es sich nicht um anonyme Analysen mit zusammengefassten Werten handelt.
            </p>
            <p>
              Sofern diese Analysen oder Profile personenbezogen sind, werden Sie mit Kündigung der Nutzer gelöscht oder anonymisiert, sonst nach zwei Jahren ab Vertragsschluss. Im Übrigen werden die gesamtbetriebswirtschaftlichen Analysen
              und allgemeine Tendenzbestimmungen nach Möglichkeit anonym erstellt.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Teilnahme an Affiliate-Partnerprogrammen</h1>
            <p>
              Innerhalb unseres Onlineangebotes setzen wir auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes) gem. Art. 6 Abs. 1 lit. f DSGVO
              branchenübliche Trackingmaßnahmen ein, soweit diese für den Betrieb des Affiliatesystems erforderlich sind. Nachfolgend klären wir die Nutzer über die technischen Hintergründe auf.
            </p>
            <p>
              Die von unseren Vertragspartnern angebotenen Leistungen können auch auf anderen Webseiten beworben und verlinkt werden (sog. Affiliate-Links oder After-Buy-Systeme, wenn z.B. Links oder Leistungen Dritter nach einem
              Vertragsschluss angeboten werden). Die Betreiber der jeweiligen Webseiten erhalten eine Provision, wenn Nutzer den Affiliate-Links folgen und anschließend die Angebote wahrnehmen.
            </p>
            <p>
              Zusammenfassend ist es für unser Onlineangebot erforderlich, dass wir nachverfolgen können, ob Nutzer, die sich für Affiliate-Links und/oder die bei uns verfügbaren Angebote interessieren, die Angebote anschließend auf die
              Veranlassung der Affiliate-Links oder unserer Onlineplattform wahrnehmen. Hierzu werden die Affiliate-Links und unsere Angebote um bestimmte Werte ergänzt, die ein Bestandteil des Links oder anderweitig, z.B. in einem Cookie,
              gesetzt werden können. Zu den Werten gehören insbesondere die Ausgangswebseite (Referrer), Zeitpunkt, eine Online-Kennung der Betreiber der Webseite, auf der sich der Affiliate-Link befand, eine Online-Kennung des jeweiligen
              Angebotes, eine Online-Kennung des Nutzers, sowie Tracking-spezifische Werte wie z.B. Werbemittel-ID, Partner-ID und Kategorisierungen.
            </p>
            <p>
              Bei der von uns verwendeten Online-Kennungen der Nutzer handelt es sich um pseudonyme Werte. D.h. die Online-Kennungen enthalten selbst keine personenbezogenen Daten wie Namen oder E-Mailadressen. Sie helfen uns nur zu
              bestimmen, ob derselbe Nutzer, der auf einen Affiliate-Link geklickt oder sich über unser Onlineangebot für ein Angebot interessiert hat, das Angebot wahrgenommen, d.h. z.B. einen Vertrag mit dem Anbieter abgeschlossen hat.
              Die Online-Kennung ist jedoch insoweit personenbezogen, als dem Partnerunternehmen und auch uns, die Online-Kennung zusammen mit anderen Nutzerdaten vorliegen. Nur so kann das Partnerunternehmen uns mitteilen, ob derjenige
              Nutzer das Angebot wahrgenommen hat und wir z.B. den Bonus auszahlen können.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Registrierfunktion</h1>
            <p>
              Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt und auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO zu Zwecken der Bereitstellung des Nutzerkontos
              verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Name, Passwort, Telefonnummer, Adresse, Postleitzahl, Stadt, Land sowie eine E-Mailadresse). Die im Rahmen der Registrierung eingegebenen
              Daten werden für die Zwecke der Nutzung des Nutzerkontos und dessen Zwecks verwendet.
            </p>
            <p>
              Die Nutzer können über Informationen, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen, per E-Mail informiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das
              Nutzerkonto, vorbehaltlich einer gesetzlichen Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer
              gespeicherten Daten des Nutzers unwiederbringlich zu löschen.
            </p>
            <p>
              Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage
              unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche
              erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO. Die IP-Adressen werden spätestens nach 7 Tagen anonymisiert oder gelöscht.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Kontaktaufnahme</h1>
            <p>
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen
              vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System ("CRM System") oder vergleichbarer
              Anfragenorganisation gespeichert werden.
            </p>
            <p>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Newsletter</h1>
            <p>
              Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren Newsletter
              abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.
            </p>
            Inhalt des Newsletters
            <p>
              Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend "Newsletter") nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen
              einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind Sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Leistungen und uns.
            </p>
            Double-Opt-In und Protokollierung
            <p>
              Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist
              notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört
              die Speicherung des Anmelde- und des Bestätigungszeitpunkts, sowie der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
            </p>
            Anmeldedaten
            <p>Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie, einen Namen zwecks persönlicher Ansprache im Newsletter anzugeben.</p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Cloudflare CDN</h1>
            <p>
              Wir nutzen das Content Delivery Network (CDN) von Cloudflare Germany GmbH, Rosental 7, c/o Mindspace, 80331 München Deutschland (Cloudflare), um die Sicherheit und die Auslieferungsgeschwindigkeit unserer Website zu erhöhen.
              Dies entspricht unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO). Ein CDN ist ein Netzwerk aus weltweit verteilten Servern, das in der Lage ist, optimiert Inhalte an den Websitenutzer auszuliefern. Für diesen Zweck
              können personenbezogene Daten in Server-Logfiles von Cloudflare verarbeitet werden. Bitte vergleichen Sie die Ausführungen unter "Erhebung von Zugriffsdaten und Logfiles".
            </p>
            <p>
              Cloudflare ist Empfänger Ihrer personenbezogenen Daten und als Auftragsverarbeiter für uns tätig. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst kein Content Delivery
              Network zu betreiben.
            </p>
            <p>Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu ermitteln.</p>
            <p>Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht gewährleistet.</p>
            <p>Ihre personenbezogenen Daten werden von Cloudflare so lange gespeichert, wie es für die beschriebenen Zwecke erforderlich ist.</p>
            <p>
              Cloudflare hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten Aktivitäten, bei denen Cloudflare personenbezogene Daten von natürlichen Personen in der EU verarbeitet.
              Diese Maßnahmen basieren auf den EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie unter:{" "}
              <a href="https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf">https://www.cloudflare.com/cloudflare_customer_SCCs-German.pdf</a>.
            </p>
          </div>
          <div className="flex flex-col text-black/70  my-4 gap-3">
            <h1 className="text-xl text-black">Livechat</h1>
            <p>
              Wir verwenden die selbstgehostete Variante der Livechat Lösung Rocket Chat (<a href="https://docs.rocket.chat/legal/privacy">https://docs.rocket.chat/legal/privacy</a>).
            </p>
            <p>
              Die Datenverarbeitung dient dem Zweck der unmittelbaren und effizienten Kommunikation zwischen Ihnen und uns als Anbieter. Um das Live-Chat-System zu betreiben, werden Cookies eingesetzt, die die Wiedererkennung des Browsers
              ermöglichen. Dabei können u.a. folgende Informationen verarbeitet und gegebenenfalls an Crisp übermittelt werden: IP-Adresse sowie weitere, von Ihnen bei Nutzung des Chat-Systems zur Verfügung gestellte personenbezogene Daten.
              Die Nutzung von Cookies oder vergleichbarer Technologien erfolgt mit Ihrer Einwilligung auf Grundlage des § 15 Abs. 3 S. 1 TMG i.V.m. Art. 6 Abs. 1 lit. a DSGVO. Die Verarbeitung Ihrer personenbezogenen Daten erfolgt mit Ihrer
              Einwilligung auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO. Sie können die Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
            </p>
            <p>
              Rocket Chat ist eine DSGVO konforme Lösung: <a href="https://docs.rocket.chat/legal/gdpr">https://docs.rocket.chat/legal/gdpr</a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Datenschutz;
