import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const DatenschutzPage = () => {
  const data = {}
  data.heading = "Datenschutz"
  data.text = ``
  return (
    <Layout>
      <SEO title="Impressum"></SEO>
      <Hero data={data}></Hero>
      <div class="info privacy">
        <div className="mb-12 mx-auto bg-black-trans p-4 blur">
          <p>Stand: 01.05.2021</p>
          <h2>1. Einleitung/Präambel</h2>
          <p>
            Wir behandeln Ihre personenbezogenen Daten stets vertraulich und
            halten uns an alle anwendbaren Datenschutzvorschriften. Ihre
            personenbezogenen Daten verarbeiten wir daher nur, soweit dies
            gesetzlich erlaubt ist oder Sie uns dazu Ihre Einwilligung erteilt
            haben.
          </p>

          <p>
            Diese Datenschutzerklärung gilt für Ihren Besuch unserer Website,
            für andere Angebote und von uns ggf. angebotene Dienste findet sie
            keine Anwendung.
          </p>
          <h2>2. Verantwortlicher</h2>
          <p>
            Diese Datenschutzerklärung gilt für die Datenverarbeitung durch mich
            als Verantwortliche gem. Art. 4 Abs. 7 Datenschutzgrundverordnung
            (DSGVO). Meine Kontaktdaten lauten:
          </p>
          <p>
            Michaela Hindelang
            <br />
            Riesen 15
            <br />
            86989 Steingaden
          </p>
          <a href="mailto:michaela@aktivstall-pfaffenwinkel.de">
            Mail: michaela@aktivstall-pfaffenwinkel.de
          </a>
          <h2>3. Datenschutzbeauftragter</h2>
          <p>
            Zur Benennung eines Datenschutzbeauftragten bin ich nicht
            verpflichtet.
          </p>
          <h2>4. Begriffsdefinitionen</h2>
          <p>
            Soweit diese Datenschutzerklärung keine abweichende Definition
            beinhaltet oder impliziert, wird im Hinblick auf die verwendeten
            Begriffe auf die Definitionen in Art. 4 DSGVO verwiesen.
          </p>
          <h2>5. Verarbeitung Ihrer personenbezogenen Daten</h2>
          <h3>5.1 Beim Aufruf meiner Website</h3>
          <p>
            Beim Aufruf meiner Website, also wenn Sie sich nicht registrieren
            oder mir anderweitig Informationen übermitteln, erhebe ich bzw. der
            in meinem Auftrag tätige Hostingdienstleister Netlify, Inc., 2325
            3rd Street, Suite 215, San Francisco, 94107 CA nur die
            personenbezogenen Daten, die Ihr Browser an meinen Server
            übermittelt.
          </p>
          <ul>
            <li>Anonymisierte IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
            <li>Inhalt der Anforderung (konkrete Seite)</li>
            <li>Zugriffsstatus/HTTP-Statuscode</li>
            <li>jeweils übertragene Datenmenge</li>
            <li>Website, von der die Anforderung kommt</li>
            <li>Browser</li>
            <li>Betriebssystem und dessen Oberfläche</li>
            <li>Sprache und Version der Browsersoftware</li>
          </ul>
          <p>
            Diese Daten sind für mich technisch erforderlich, um Ihnen meine
            Website anzuzeigen und zur Verfügung zu stellen. Die Rechtsgrundlage
            für diese Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Die
            Löschung erfolgt nach sieben Tagen.
          </p>
          <h3>
            5.2 Im Rahmen der Kontaktaufnahme per Kontaktformular oder E-Mail
          </h3>
          <p>
            Wenn Sie mit mir Kontakt per Kontaktformular oder E-Mail aufnehmen,
            benötige ich Ihre personenbezogenen Daten (z.B. Name, Kontaktdaten,
            etc.), um Ihre Anfrage bzw. Ihr Anliegen zu bearbeiten. Die
            Verarbeitung Ihrer personenbezogenen Daten geschieht auf Grundlage
            von Art. 6 Abs. 1 S. 1 lit. b DSGVO.
          </p>
          <p>
            Ich lösche die Daten, sofern diese nicht mehr erforderlich sind oder
            – im Falle von gesetzlichen Aufbewahrungspflichten – schränke ich
            die Verarbeitung ein. Die Erforderlichkeit überprüfe ich alle sechs
            Monate.
          </p>
          <p>
            E-Mails, die Sie an mich und ich an Sie übermittle verarbeite ich
            mittels eines E-Mail-Servers des Anbieters ALL-INKL.COM - Neue
            Medien Münnich, Hauptstraße 68, D-02742 Friedersdorf, Deutschland.
            Im Rahmen der E-Mail-Kommunikation verarbeitet ALL-INKL.COM
            personenbezogene Daten in meinem Auftrag, um mir die
            E-Mail-Kommunikation mit Ihnen zu ermöglichen. Die Verarbeitung
            Ihrer personenbezogenen Daten geschieht auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO.
          </p>
          <string>Widerspruchsrecht:</string>
          <p>
            Sie haben das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
            Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür
            Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben
            oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren
            Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe
            einer besonderen Situation von mir umgesetzt wird. Möchten Sie von
            Ihrem Widerspruchsrecht Gebrauch machen, können Sie mir das per
            E-Mail an michaela@aktivstall-pfaffenwinkel.de mitteilen. Alternativ
            stehen Ihnen dazu auch die oben unter Ziffer 2. genannten
            Kontaktdaten zur Verfügung.
          </p>
          <p>
            Ich lösche die Daten, sofern diese nicht mehr erforderlich sind oder
            – im Falle von gesetzlichen Aufbewahrungspflichten – schränke ich
            die Verarbeitung ein. Die Erforderlichkeit überprüfe ich alle sechs
            Monate.
          </p>
          <h3>5.3 Im Rahmen der Kontaktaufnahme per Telefon</h3>
          <p>
            Wenn Sie mit mir Kontakt per Telefon aufnehmen, benötige ich ggf.
            Ihre personenbezogenen Daten (z.B. Name, Kontaktdaten, etc.), um
            Ihre Anfrage bzw. Ihr Anliegen zu bearbeiten. Sofern auf die Weise
            eine DSGVO-relevante Verarbeitung Ihrer personenbezogenen Daten
            vorliegt, geschieht dies auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b
            DSGVO.
          </p>
          <p>
            Wenn eine DSGVO-relevante Verarbeitung dieser Daten erfolgt, lösche
            ich sie, sofern sie nicht mehr erforderlich sind oder – im Falle von
            gesetzlichen Aufbewahrungspflichten – schränke ich die Verarbeitung
            ein. Die Erforderlichkeit überprüfe ich alle sechs Monate.
          </p>
          {/*           <h3>5.4 Nutzungsanalyse durch Matomo (ehemals Piwik)</h3>
          <p>
            Ich nutze den Web-Analysedienst Matomo (ehemals PIWIK) für die
            anonymisierte Analyse ohne das Einsetzen von Cookies. Folgende Daten
            werden dabei gespeichert:
          </p>
          <ul>
            <li>Zwei Bytes der IP-Adresse des aufrufenden Systems</li>
            <li>Die aufgerufene Webseite</li>
            <li>
              Die Website, von der Sie auf die aufgerufene Webseite gelangt sind
              (Referrer)
            </li>
            <li>Die Verweildauer auf der Webseite</li>
            <li>
              Bestimmte Interaktion auf der Website wie z.B. das
              Starten/Stoppen/Gewinnen des Spiels
            </li>
          </ul>
          <p>
            Die Software läuft dabei ausschließlich auf den Servern meiner
            Webseite. Eine Speicherung Ihrer personenbezogenen Daten findet nur
            dort statt. Diese Daten werden nicht an Dritte weitergegeben. Die
            Software ist so eingestellt, dass die IP-Adressen nicht vollständig
            gespeichert werden, sondern 2 Bytes der IP-Adresse maskiert werden
            (Bsp.: 192.168.xxx.xxx). Auf diese Weise ist eine Zuordnung der
            gekürzten IP-Adresse zum aufrufenden Rechner nicht mehr möglich.
            Bezüglich der weiteren Informationen zu den Datenschutzbestimmungen
            von Matomo verweise ich auf nachstehenden Link: matomo.org/privacy/
            und matomo.org/privacy-policy/.
          </p>
          <p>
            Der Web-Analysedienst Matomo dient mir vorwiegend zur Optimierung
            der Webseite. Matomo wird weiterhin dafür genutzt, um eine Analyse
            des Besucherstroms der Nutzer auf der Webseite zu ermöglichen. Es
            liegt in meinem berechtigten Interesse, mein Webseite-Angebot für
            Sie anschaulich und nutzerfreundlich zu gestalten. Durch die
            Anonymisierung der IP-Adresse wird dem Interesse der Nutzer an deren
            Schutz personenbezogener Daten hinreichend Rechnung getragen.
          </p>
          <p>
            Ich verarbeite personenbezogene Daten nur so lange, wie es notwendig
            ist. Sobald der Zweck der Datenverarbeitung erfüllt ist, findet nach
            den Maßstäben des hiesigen Löschkonzepts eine Sperrung und Löschung
            statt, es sei denn, dass gesetzliche Vorschriften einer Löschung
            entgegenstehen.
          </p> */}
          <h2>6. Übermittlung in Drittstaaten</h2>
          <p>
            Ich verarbeite Ihre personenbezogenen Daten nur dann in einem
            Drittland (d.h. außerhalb der Europäischen Union (EU) oder des
            Europäischen Wirtschaftsraums (EWR)), wenn es zur Erfüllung unserer
            (vor)vertraglichen Pflichten (gem. Art. 6 Abs. 1 S. 1 lit. b DSGVO),
            auf Grundlage Ihrer Einwilligung (gem. Art. 6 Abs. 1 S. 1 lit. a
            DSGVO), aufgrund einer rechtlichen Verpflichtung (gem. Art. 6 Abs. 1
            S. 1 lit. c DSGVO) oder auf Grundlage unserer berechtigten
            Interessen (gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO) erforderlich ist.
            Das gleiche gilt, wenn Dritte Ihre Daten in unserem Auftrag in einem
            Drittland verarbeiten.
          </p>
          <p>
            Eine Übermittlung in ein Drittland erfolgt ferner nur dann, wenn
            dies nach den Art. 44 ff. DSGVO erlaubt ist.
          </p>
          <h2>7. Löschung von Daten</h2>
          <p>
            Die von mir verarbeiteten Daten werden nach Maßgabe des Art. 17
            DSGVO gelöscht oder nach Art. 18 DSGVO in ihrer Verarbeitung
            eingeschränkt.
          </p>
          <p>
            Sofern im Rahmen dieser Datenschutzerklärung nichts Abweichendes
            geregelt ist, werden die von mir verarbeiteten Daten gelöscht,
            sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und
            der Löschung keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen. Die Erforderlichkeit überprüfe ich alle sechs
            Monate. Sofern die Daten nicht gelöscht werden, weil sie für andere,
            gesetzlich zulässige Zwecke erforderlich sind, wird deren
            Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht
            verwendet. Das gilt z.B. für Daten, die aus handels- oder
            steuerrechtlichen Gründen aufbewahrt werden müssen.
          </p>
          <p>
            Nach gesetzlichen Vorgaben in Deutschland erfolgt die Aufbewahrung
            bzw. Speicherung insbesondere von Handelsbüchern, Inventaren,
            Eröffnungsbilanzen, Jahresabschlüssen, Handelsbriefen,
            Buchungsbelegen, etc. gemäß § 257 Abs. 1 HGB für sechs Jahre sowie
            insbesondere von Büchern, Aufzeichnungen, Lageberichten,
            Buchungsbelegen, Handels- und Geschäftsbriefen sowie für Besteuerung
            relevante Unterlagen, etc. gemäß § 147 Abs. 1 AO für zehn Jahre.
          </p>
          <h2>8. Betroffenenrechte</h2>
          <p>Sie haben das Recht:</p>
          <ul>
            <li>
              gemäß Art. 15 DSGVO Auskunft über Ihre von mir verarbeiteten
              personenbezogenen Daten zu verlangen. Insbesondere können Sie
              Auskunft über die Verarbeitungszwecke, die Kategorie der
              personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
              denen Ihre Daten offengelegt wurden oder werden, die geplante
              Speicherdauer, das Bestehen eines Rechts auf Berichtigung,
              Löschung, Einschränkung der Verarbeitung oder Widerspruch, das
              Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern
              diese nicht bei mir erhoben wurden, sowie über das Bestehen einer
              automatisierten Entscheidungsfindung einschließlich Profiling und
              ggf. aussagekräftigen Informationen zu deren Einzelheiten
              verlangen;
            </li>
            <li>
              gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
              Vervollständigung Ihrer bei mir gespeicherten personenbezogenen
              Daten zu verlangen;
            </li>
            <li>
              gemäß Art. 17 DSGVO die Löschung Ihrer bei mir gespeicherten
              personenbezogenen Daten zu verlangen, soweit nicht die
              Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung
              und Information, zur Erfüllung einer rechtlichen Verpflichtung,
              aus Gründen des öffentlichen Interesses oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
            </li>
            <li>
              gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
              Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig
              ist, Sie aber deren Löschung ablehnen und ich die Daten nicht mehr
              benötige, Sie jedoch diese zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
              DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;
            </li>
            <li>
              gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie mir
              bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesebaren Format zu erhalten oder die Übermittlung an
              einen anderen Verantwortlichen zu verlangen;
            </li>
            <li>
              gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
              In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres
              üblichen Aufenthaltsortes oder Arbeitsplatzes oder meines
              Unternehmenssitzes wenden.
            </li>
          </ul>
          <h2>9. Widerrufs- und Widerspruchsrechte</h2>
          <h3>9.1 Widerruf von erteilten Einwilligungen</h3>
          <p>
            Sollte ich Ihre personenbezogenen Daten auf Grundlage einer von
            Ihnen dazu erteilten Einwilligung gem. Art 6 Abs. 1 lit. a DSGVO
            verarbeiten, haben Sie das Recht uns ggf. erteilte Einwilligungen
            gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen.
          </p>
          <p>
            Möchten Sie von Ihrem Widerrufsrecht Gebrauch machen, können Sie mir
            das per E-Mail an michaela@aktivstall-pfaffenwinkel.de mitteilen.
          </p>
          <h3>
            9.2 Widerspruch bei Verarbeitung auf Grundlage berechtigten
            Interesses
          </h3>
          <p>
            Sofern ich Ihre personenbezogenen Daten auf Grundlage meines
            berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO
            verarbeiten, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch
            gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen,
            soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen
            Situation ergeben oder sich der Widerspruch gegen Direktwerbung
            richtet. Im letzteren Fall haben Sie ein generelles
            Widerspruchsrecht, das ohne Angabe einer besonderen Situation von
            uns umgesetzt wird.
          </p>
          <p>
            Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, können Sie
            mir das per E-Mail an michaela@aktivstall-pfaffenwinkel.de
            mitteilen.
          </p>
          <h2>10. Sicherheitsmaßnahmen</h2>
          <p>
            Ich treffe organisatorische, vertragliche und technische
            Sicherheitsmaßnahmen entsprechend dem Stand der Technik, um
            sicherzustellen, dass die Vorschriften der Datenschutzgesetze
            eingehalten werden und um damit die durch mich verarbeiteten Daten
            gegen zufällige oder vorsätzliche Manipulationen, Verlust,
            Zerstörung oder gegen den Zugriff unberechtigter Personen zu
            schützen. Zu den Sicherheitsmaßnahmen gehört insbesondere die
            verschlüsselte Übertragung von Daten zwischen Ihrem Browser und
            meinem Server.
          </p>
          <h2>11. Schlussbestimmungen</h2>
          <p>
            Ich behalte mir das Recht vor, meine Datenschutzerklärung zu ändern,
            falls dies aufgrund neuer Technologien oder Änderungen meiner
            Datenverarbeitungsprozesse notwendig sein sollte oder um sie an
            Änderungen der für mich maßgeblichen Rechtslage anzupassen. Dies
            betrifft jedoch nur diese Datenschutzerklärung. Sofern ich Ihre
            personenbezogenen Daten auf Grundlage einer von Ihnen erteilten
            Einwilligung verarbeite oder Bestandteile der Datenschutzerklärung
            Regelungen des Vertragsverhältnisses mit Ihnen enthalten, erfolgen
            etwaige Änderungen nur mit Ihrer Zustimmung.
          </p>
          <p>
            Die jeweils aktuelle Fassung meiner Datenschutzerklärung sowie deren
            Änderungshistorie können Sie unter
            https://www.aktivstall-pfaffenwinkel.de nachvollziehen.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default DatenschutzPage
