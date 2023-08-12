import React, { useEffect } from "react";
import Footer from "../../components/layout/footer";
import logo from "../../pictures/logo-footer.svg";
import { useNavigate } from "react-router-dom";

function Jacht() {
  useEffect(() => {
    const handleScroll = () => {
      const navLogo = document.querySelector(".navLogo");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        navLogo.classList.add("scrolled");
      } else {
        navLogo.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function toggleOpenText() {
    const meniDiv = document.querySelector('.meni');
    
    meniDiv.classList.toggle('hovered');
  }

  const navigate = useNavigate();
  function handleLinkClick(path) {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  }
  return (
    <div className="background">
      <div className="navLogo margin-logo-contact">
      <a onClick={() => handleLinkClick("/")}>
            <img src={logo} alt="logo" className="logo" />
          </a>
          <a href="" title="Menu">
            <div className="meni" onClick={toggleOpenText}>
              <span className="open-span" onClick={() => handleLinkClick("/navbar")}>OPEN</span>
              <span className="menu-span">MENU</span>
            </div>
          </a>
      </div>
      <div className="grid">
        <div className="titleVinum max">
          <p className="subtitle-sm">VINUM ART 2018 d.o.o.</p>
          <div className="row">
          <h1 className="headerTitle">Pravila privatnosti</h1>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="sadrzaj">
          <div className="sadrz">
            <div className="naslov">
              <p className="podnaslov">PRAVNE INFORMACIJE I OBAVIJESTI</p>
              <h2 className="naslovJ">Pravila privatnosti</h2>
            </div>
            <h3 className="uvjetiPitanja">Opće odredbe </h3>
            <p className="p">
              Razumijemo da vam je vaša privatnost važna i da vam je stalo do
              toga kako se vaši osobni podaci koriste i dijele na mreži.
              Poštujemo i cijenimo privatnost svakoga tko posjećuje ovu web
              stranicu i želimo da budete sigurni da će se svi osobni podaci
              prikupljeni s ove web stranice i dalje koristiti u skladu s našim
              obvezama i vašim pravima prema relevantnom zakonu kao što je Zakon
              o zaštiti osobnih podataka i Uredba EU GDPR. Ova Pravila
              privatnosti objašnjavaju koji će se vaši podaci prikupljati, kako
              će se podaci koristiti i kako možete kontrolirati prikupljanje,
              ispravljanje i/ili brisanje podataka. Posjetom naše web stranice
              https://www.vinumart.hr prihvaćate i pristajete na prakse opisane
              u ovim Pravilima privatnosti. Ako ne prihvaćate i ne slažete se s
              ovom Politikom privatnosti, morate odmah prestati koristiti našu
              web stranicu. Ova Pravila privatnosti odnose se samo na vaše
              korištenje naše web stranice i naših usluga. Naša web stranica
              može sadržavati poveznice na druge web stranice. Imajte na umu da
              nemamo kontrolu nad načinom na koji se vaši podaci prikupljaju,
              pohranjuju ili koriste od strane drugih web-mjesta i savjetujemo
              vam da provjerite pravila privatnosti bilo koje takve web stranice
              prije nego im pružite bilo kakve podatke.
            </p>

            <h3 className="uvjetiPitanja">Koje osobne podatke prikupljamo?</h3>
            <p className="p">
              Prikupljamo podatke od vas kada posjetite naše web stranice ili
              prostore, kupite nešto od nas, osobno se raspitate o našim
              uslugama, kontaktirate nas telefonom, e-poštom ili na neki drugi
              način ili odgovorite na našu komunikaciju.<br></br>
              <br></br> Naša će web stranica prikupljati i koristiti osobne
              podatke samo na načine koji su opisani u ovoj Politici privatnosti
              i na način koji je u skladu s našim obvezama i vašim pravima prema
              mjerodavnom zakonu. Kada koristite našu web stranicu, dajete neke
              osobne podatke o tome tko ste i kako koristite naše usluge.
              Prikupljeni podaci su podaci koje nam dajete, uključujući, ali ne
              ograničavajući se na, vaše ime i prezime, adresu i adresu e-pošte.{" "}
              <br></br>
              <br></br>Kroz proces rezervacije prikupljamo vaše ime i prezime,
              adresu, e-mail adresu, broj telefona i podatke o kreditnoj
              kartici. Ovisno o rezervaciji, također možemo tražiti vaš spol,
              nacionalnost, broj osobne ili putovnice, datum i mjesto rođenja te
              iste podatke od gostiju koji putuju s vama.<br></br>
              <br></br> Nadalje, kada posjetite našu web stranicu, automatski
              primamo i spremamo informacije s vašeg računala i preglednika
              putem »kolačića«, uključujući vašu IP adresu, operativni sustav,
              vrstu preglednika, informacije o softveru i hardveru, traženu
              stranicu, postavke jezika te datum i vrijeme pristupa web
              stranici.
            </p>

            <h3 className="uvjetiPitanja">Zašto koristimo vaše osobne podatke?</h3>
            <p className="p">
              Za potrebe obavljanja naših usluga sukladno ugovoru i primjenjivim
              općim uvjetima; u svrhu izravnog marketinga, istraživanja tržišta,
              segmentacije kupaca, statističke obrade, za analizu web stranice,
              da vam pružimo ažuriranja, da vas pozovemo na naše događaje, za
              upravljanje svim promocijama u kojima ste odabrali sudjelovati,
              komunicirati s vama o proizvodima, uslugama, ponudama,
              promocijama, za praćenje tehničke izvedbe naših usluga, ponuditi
              bolje usluge za sljedeće posjetitelje, kako bismo zaštitili naše
              prostore i imovinu.
            </p>

            <h3 className="uvjetiPitanja">
              Koja je pravna podloga za prikupljanje vaših osobnih podataka?
            </h3>
            <p className="p">
              Vaše osobne podatke prikupljamo i čuvamo na nekoliko pravnih
              osnova: Ugovorna obveza: kad god je postupanje s vašim osobnim
              podacima potrebno za izvršenje, provedbu i upravljanje ugovorom
              sklopljenim s nama. Pravna obveza: u nekim slučajevima zakon
              zahtijeva prikupljanje i pohranu vaših osobnih podataka. Legitimni
              interes: za neke podatke imamo dobar i pošten razlog da ih
              koristimo na način koji ne šteti vašim interesima i pravima.
              Pristanak: kada namjerno unesete svoje podatke (na primjer svoju
              adresu e-pošte), trebali biste očekivati ​​da će te informacije
              pohraniti i koristiti naši sustavi u skladu s ovim Pravilima
              privatnosti
            </p>

            <h3 className="uvjetiPitanja">
              Kako osiguravamo sigurnost vaših osobnih podataka?
            </h3>
            <p className="p">
              Razumijemo da je sigurnost vaših osobnih podataka posebno važna i
              zato poduzimamo razne sigurnosne mjere kako bismo zaštitili vaše
              osobne podatke. Svi osobni podaci obrađuju se i pohranjuju na
              siguran način, ne duže nego što je potrebno u svjetlu razloga(a)
              zbog kojih su prvi prikupljeni. Poštivat ćemo svoje obveze i
              čuvati Vaše osobne podatke u skladu sa Zakonom o zaštiti osobnih
              podataka i Uredbom EU GDPR u svakom trenutku. Naša upotreba vaših
              osobnih podataka uvijek će imati zakonsku osnovu kao što je
              prethodno spomenuto. Samo ovlašteno osoblje smije pristupiti vašim
              osobnim podacima. U slučaju da su osobni podaci ugroženi kao
              posljedica narušavanja sigurnosti, odmah ćemo obavijestiti one
              osobe čiji su osobni podaci kompromitirani, u skladu sa Zakonom o
              zaštiti osobnih podataka i EU Uredbom GDPR ili na drugi način
              propisan važećim zakonom. Kako razvijamo svoje poslovanje, možemo
              kupiti ili prodati imovinu ili poslovne ponude. Informacije o
              klijentima i posjetiteljima općenito su jedna od prenesenih
              poslovnih sredstava u ovim vrstama transakcija. Takve informacije
              također možemo prenijeti tijekom korporativne prodaje, spajanja
              ili raspuštanja. Vaše osobne podatke ne iznajmljujemo niti
              prodajemo drugima. Otkrivanje Vaših podataka trećim stranama Vaše
              osobne podatke možemo podijeliti s relevantnim trećim stranama. Na
              primjer, kada koristite kreditnu karticu za rezervaciju, moramo
              podijeliti određene podatke o rezervaciji s pružateljem usluga
              platnog prometa i relevantnom financijskom institucijom za
              obavljanje ovog plaćanja. Možda ćemo također morati otkriti vaše
              osobne podatke nadležnim tijelima, tijelima za provedbu zakona jer
              je to propisano zakonom ili je strogo potrebno za sprječavanje,
              otkrivanje ili procesuiranje kaznenih djela ili prijevare ili ako
              smo na drugi način zakonski obvezni učiniti. Možda ćemo morati
              dodatno otkriti osobne podatke nadležnim tijelima kako bismo
              zaštitili i obranili svoja prava ili prava naših poslovnih
              partnera. Podatke možemo prenijeti pouzdanim pružateljima usluga
              trećih strana (kao što su tvrtke za upravljanje ili poštanske
              kuće) kako bi nam pružili usluge, pomogli u razvoju naše web
              stranice, marketinških aktivnosti ili poslovanja. Štoviše, možemo
              također podijeliti vaše osobne podatke s relevantnim trećim
              stranama kao što su pružatelji plovila kod kojih ste rezervirali.
              Primarna svrha je obrada vaše rezervacije plovila, dijeljenje
              vaših podataka relevantnih za vaše putovanje ili provjera
              ispravnosti (na primjer e-mail adresa koju ste naveli tijekom
              rezervacije). Sve pružatelje usluga treće strane obvezuju klauzule
              o povjerljivosti i ne smiju koristiti vaše osobne podatke u druge
              svrhe osim u naše upute. Ovim pružateljima trećih strana bit će
              dostavljeni samo osobni podaci koji su nužni za ispunjavanje gore
              navedenih svrha. Prijenos vaših podataka izvan Europe Kao dio
              usluga koje vam nudimo putem naše web stranice, informacije koje
              nam date mogu se prenijeti u zemlje izvan Europske unije i stoga
              nismo u mogućnosti pružiti istu razinu sigurnosti kao što je
              predviđeno propisima EU-a i njegovim Države članice. Koliko dugo i
              gdje pohranjujemo vaše osobne podatke? Vaše osobne podatke čuvamo
              samo onoliko dugo koliko je potrebno kako bismo ih koristili na
              gore opisani način i/ili dok imamo vaše dopuštenje da ih čuvamo.
              Neki od vaših osobnih podataka bit će pohranjeni onoliko dugo
              koliko to zahtijevaju različiti zakoni kojih se moramo
              pridržavati. Nakon završetka usluge pohranit ćemo i koristiti
              adresu e-pošte samo za potrebe komunikacije u svrhe navedene u
              članku III. ove politike. Svi ostali osobni podaci bit će
              izbrisani. Koja su vaša prava na podatke? Prema EU Uredbi GDPR
              imate određena zakonska prava, koja su ukratko sažeta u nastavku,
              u vezi s bilo kojim osobnim podacima o vama koje posjedujemo. Ako
              želite ostvariti neko od prava koje možete u bilo kojem trenutku,
              kontaktirajte nas (kontakt podaci infra). Ostvarivanje ovih prava
              je besplatno, osim ako je vaš zahtjev »očigledno neutemeljen ili
              pretjeran« (na primjer, ako podnosite zahtjeve koji se
              ponavljaju). U tom slučaju može se naplatiti naknada za pokrivanje
              naših administrativnih troškova pri odgovaranju. a. Pravo pristupa
              Ako želite znati obrađuju li se vaši osobni podaci ili ne i koje
              osobne podatke imamo o vama, možete nas zatražiti pojedinosti o
              njima i njihovu kopiju. Pregled svojih osobnih podataka možete
              zatražiti slanjem poruke na info@alfamario.com . Ako je moguće,
              trebali biste navesti vrstu informacija koju želite vidjeti kako
              biste osigurali da naše otkrivanje ispunjava vaša očekivanja. b.
              Pravo na ispravak Uvijek nas možete obavijestiti o svim promjenama
              vaših osobnih podataka ili nas možete zatražiti da ispravimo bilo
              koji od osobnih podataka koje imamo o vama. Potičemo vas da nas
              obavijestite o svim promjenama u vezi s vašim osobnim podacima čim
              do njih dođe, uključujući promjene vaših podataka za kontakt.
              Prilikom korištenja ovog prava molimo Vas da budete što
              konkretniji. c. Pravo na brisanje (»pravo na zaborav«) To znači
              pravo tražiti od nas da izbrišemo, blokiramo, ograničimo ili na
              drugi način raspolažemo bilo kojim od vaših osobnih podataka koje
              imamo u sljedećim situacijama: • ako osobni podaci više nisu
              potrebni u svrhu za koju su prikupljeni ili obrađeni, • ako
              privolu na kojoj se temelji obrada podataka povlači se i za to
              nema druge pravne osnove, • ako su osobni podaci protuzakonito
              obrađeni, • ako se osobni podaci moraju izbrisati zbog zakonske
              obveze. Imajte na umu da možda nećemo biti u mogućnosti izbrisati
              vaše osobne podatke, ako, na primjer, moramo ispuniti zakonsku
              obvezu ili izvršiti ili braniti pravne zahtjeve. d. Pravo na
              ograničenje obrade Imate pravo zatražiti od nas da ograničimo
              obradu vaših osobnih podataka. Ovo se pravo primjenjuje kada je
              naša obrada vaših osobnih podataka neophodna za naš legitimni
              interes. e. Pravo na prigovor Imate pravo prigovoriti određenoj
              obradi osobnih podataka, uključujući na primjer obradu vaših
              osobnih podataka u marketinške svrhe ili kada na drugi način svoju
              obradu vaših osobnih podataka temeljimo na legitimnom interesu. f.
              Pravo na prenosivost podataka To znači pravo na dobivanje kopije
              vaših osobnih podataka za ponovnu upotrebu s drugom uslugom ili
              organizacijom. Ako zatražite pristup osobnim podacima o vama koje
              ste nam sami dali, i ako se osobni podaci obrađuju automatski i u
              skladu s ugovorom između vas i nas, možete zatražiti da se osobni
              podaci daju u strukturiranoj, uobičajenoj korišteni i strojno
              čitljivi format te također možete zatražiti da se osobni podaci
              prenesu drugom voditelju obrade, ako je to tehnički izvedivo. Ako
              iskoristite ovo pravo, trebali biste navesti vrstu informacija
              koje biste željeli primati gdje je to moguće kako biste osigurali
              da naše otkrivanje ispunjava vaša očekivanja. Ovo pravo vrijedi
              samo ako se obrada temelji na vašem pristanku ili na našem ugovoru
              s vama i kada se obrada provodi automatiziranim sredstvima. g.
              Pravo da povučete svoj pristanak Ako se naša obrada vaših osobnih
              podataka temelji na vašoj privoli, imate pravo povući svoju
              privolu u bilo kojem trenutku. Ako odlučite povući svoju privolu,
              prestat ćemo obrađivati ​​vaše osobne podatke u tu svrhu. Vaše
              povlačenje privole neće utjecati na našu obradu do tog trenutka.
              h. Pravo na izbjegavanje automatiziranog donošenja odluka Promjene
              naše politike privatnosti S vremena na vrijeme možemo promijeniti
              ovu Politiku privatnosti. Sve promjene bit će odmah objavljene na
              našoj web stranici i smatrat će se da ste prihvatili uvjete
              Pravila privatnosti prilikom prvog korištenja naše web stranice
              nakon izmjena. Međutim, nećemo unositi promjene koje rezultiraju
              značajnim dodatnim korištenjem ili otkrivanjem vaših osobnih
              podataka, a da vas o takvim promjenama ne obavijestimo putem vaše
              e-mail adrese najmanje 14 dana prije primjene takvih promjena. Ako
              su vam bilo kakve nebitne promjene ovih Pravila privatnosti
              neprihvatljive, morate nas odmah kontaktirati i dok se problem ne
              riješi, prestati koristiti našu web stranicu ili bilo koje usluge
              koje pružamo. Ljubazno preporučamo da redovito provjeravate ovu
              stranicu kako biste bili u tijeku. Ova Pravila privatnosti zadnji
              put su ažurirana 18 Veljače 2023.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jacht;
