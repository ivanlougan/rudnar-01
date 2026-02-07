import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-container">

      <section>
        <h2>POLITYKA PRYWATNOŚCI</h2>

        <h3>Administrator danych osobowych</h3>
        <p>Administratorem danych osobowych jest:</p>
        <p>
          PPHU RUDNAR Paulina Oliwa<br />
          ul. Jana Dobrego 26<br />
          41-700 Ruda Śląska<br />
          tel. 514 227 369<br />
          e-mail: oliwapaula@gmail.com
        </p>

        <h3>Zakres zbieranych danych</h3>
        <p>
          Za pośrednictwem formularza kontaktowego na stronie internetowej zbierane są następujące
          dane osobowe:
        </p>
        <ul>
          <li>imię i nazwisko (jeśli podane),</li>
          <li>adres e-mail,</li>
          <li>numer telefonu (jeśli podany),</li>
          <li>treść wiadomości.</li>
        </ul>

        <h3>Cel przetwarzania danych</h3>
        <p>Dane osobowe przetwarzane są wyłącznie w celu:</p>
        <ul>
          <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
          <li>kontaktu z osobą wysyłającą formularz.</li>
        </ul>

        <h3>Podstawa prawna przetwarzania danych</h3>
        <p>
          Podstawą przetwarzania danych jest zgoda użytkownika (art. 6 ust. 1 lit. a RODO), wyrażona
          poprzez dobrowolne przesłanie formularza kontaktowego.
        </p>

        <h3>Przechowywanie danych</h3>
        <p>
          Dane osobowe przechowywane są przez okres niezbędny do realizacji celu kontaktu, a następnie
          mogą zostać usunięte, chyba że obowiązujące przepisy prawa wymagają dłuższego okresu ich
          przechowywania.
        </p>

        <h3>Odbiorcy danych</h3>
        <p>
          Dane osobowe nie są przekazywane podmiotom trzecim, z wyjątkiem podmiotów uprawnionych do
          ich otrzymania na podstawie przepisów prawa.
        </p>

        <h3>Prawa osoby, której dane dotyczą</h3>
        <p>Każdej osobie przysługuje prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>ich sprostowania,</li>
          <li>usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>wniesienia sprzeciwu,</li>
          <li>cofnięcia zgody w dowolnym momencie.</li>
        </ul>
        <p>
          W celu realizacji swoich praw należy skontaktować się z administratorem danych pod adresem
          e-mail: <a href="mailto:oliwapaula@gmail.com">oliwapaula@gmail.com</a>.
        </p>

        <h3>Bezpieczeństwo danych</h3>
        <p>
          Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych
          osobowych przed ich utratą, nieuprawnionym dostępem lub ujawnieniem.
        </p>

        <h3>Zmiany w polityce prywatności</h3>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.
          Aktualna wersja dokumentu zawsze będzie dostępna na stronie internetowej.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
