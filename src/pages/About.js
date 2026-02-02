import React from "react";
import Header from "../components/Header";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <h1>RUDNAR - NARZĘDZIA DLA POKOLEŃ</h1>
        <div className="about-section">
          <div className="about-pair">
            <div className="about-image">
              <img src="images/tools.png" alt="Close-up of bolts and spanners" />
            </div>
            <div className="about-text">
              <p>
                Jesteśmy małą, rodzinną firmą z tradycjami, działającą na południu
                Polski, specjalizującą się w sprzedaży wysokiej jakości narzędzi
                budowlanych, mechanicznych, rolniczych i ogrodniczych. Od lat
                dostarczamy narzędzia, które pomagają zarówno profesjonalistom,
                jak i amatorom realizować ich projekty - od budowy domów po prace
                w warsztacie, na roli czy w ogrodzie. Naszym celem jest oferowanie
                produktów, na których nasi klienci mogą polegać przez wiele lat.
                Współpracujemy z wiodącymi producentami, takimi jak Waryński,
                Teger, Milwaukee, Baumajster, Hausmeister, Kinczyk, Aku Tools,
                Fortum i Kris, dzięki czemu możemy zagwarantować solidność i
                niezawodność naszych produktów. Stawiamy na zaufanie i długotrwałe
                relacje - zarówno z naszymi klientami, jak i partnerami
                biznesowymi. Wielu z naszych klientów korzysta z narzędzi
                oferowanych przez firmę RUDNAR, co świadczy o jakości naszych
                produktów oraz o zaangażowaniu, jakie wkładamy w naszą pracę.
              </p>
            </div>
          </div>

          <div className="about-pair">
            <div className="about-text">
              <h2>DLACZEGO WARTO WYBRAĆ RUDNAR?</h2>
              <ul>
                <li>Wieloletnie doświadczenie w branży narzędziowej.</li>
                <li>Szybka realizacja zamówień</li>
                <li>Szeroka oferta produktów od renomowanych producentów.</li>
                <li>
                  Indywidualne podejście do każdego klienta, niezależnie od skali
                  zamówienia.
                </li>
                <li>
                  Wysoka jakość obsługi, którą zapewniamy każdemu, kto nam zaufa.
                </li>
                <li>
                  Zapraszamy do współpracy - z nami narzędzia to inwestycja na
                  lata!
                </li>
              </ul>
            </div>
            <div className="about-image">
              <img src="images/spanners.png" alt="spanners hanging on the wall" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
