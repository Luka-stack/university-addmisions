import { Component, OnInit } from '@angular/core';
import { FieldModel } from '../shared/model/field.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {

  fields: Array<FieldModel>;

  constructor() {
    this.loadFields();
  }

  ngOnInit(): void {

  }

  loadFields() {
    this.fields = [
      {
        "id": 1,
        "name": "Automatyka i Robotyka",
        "faculty": "Instytut Automatyki, Elektroniki i Elektrotechniki",
        "description": `
        Automatyka i robo­t­yka to jedne z najchęt­niej wybier­anych studiów tech­nicznych w Polsce. Nie ma w tym niczego dzi­wnego biorąc pod uwagę, że ten kierunek stanowi obec­nie jedną z najbardziej per­spek­ty­wicznych dziedzin inżynier­s­kich na świecie. Wynika to z gwał­townie ros­nącego zapotrze­bowa­nia prze­mysłu na dobrych spec­jal­istów potrafią­cych nie tylko pro­jek­tować, uruchamiać i eksploa­tować nowoczesne sys­temy automatyki, ale również radzą­cych sobie z insta­lacją i obsługą zau­tomaty­zowanych stanowisk pro­duk­cyjnych, a w szczegól­ności stanowisk wyposażonych w roboty prze­mysłowe. W ostat­nich lat­ach ten trend jest doskonale widoczny także i w Polsce, gdzie nowoczesne firmy ofer­ują możli­wość bardzo ciekawej pracy i atrak­cyjnej kari­ery inżynierom pro­jek­tu­ją­cym i nad­zoru­ją­cym zau­tomaty­zowane sys­temy wyt­warza­nia i mon­tażu, a także mon­i­torowa­nia pro­cesów tech­no­log­icznych i sys­temów wytwór­czych. Stu­dia ofer­uje możli­wość spełnienia się kandydatom zain­tere­sowanym kon­struowaniem nowoczes­nych maszyn i urządzeń oraz wyko­rzys­taniem sys­temów kom­put­erowych w sterowa­niu pro­dukcją, również w opar­ciu o nowoczesną wiedzę z zakresu sztucznej inteligencji. Uni­w­er­salne przy­go­towanie absol­wen­tów kierunku, obe­j­mu­jące automatykę, robo­t­ykę i infor­matykę, stanowi wielki atut na rynku pracy.`,
        "benefits": `
        <ul>
        <li>Nowoczesny kierunek studiów związany z automatyza­cją i robo­t­yza­cją pro­cesów tech­no­log­icznych, z per­spek­tywą atrak­cyjnej i dobrze płat­nej pracy;</li>
        <li>Stu­dia o sil­nym nastaw­ie­niu na prak­tykę, o czym świad­czą m.in. nagrody zdoby­wane w konkur­sach firm Siemens i Astor na najlep­szą pracę dyplo­mową oraz wysokie miejsca drużyn stu­den­tów w zawodach KrakRo­bot, sku­pi­a­ją­cych się na sterowa­niu rob­o­t­ami mobil­nymi w opar­ciu o metody sztucznej inteligencji;</li>
        <li>Dostęp do najnowocześniejszych tech­nologii we współpracy z wiodą­cymi fir­mami w branży (m.in. unika­towe Lab­o­ra­to­rium Sterown­ików Log­icznych Nowej Gen­er­acji pod patronatem firmy Siemens oraz Lab­o­ra­to­rium Robo­t­yki z nowoczes­nymi rob­o­t­ami prze­mysłowymi firm Fanuc, Kawasaki i Kuka);</li>
        <li>Bliska współpraca z między­nar­o­dowymi lid­erami branży automatyki (możli­wość ukończenia jedynej w Polsce Akademii Automatyki Siemens oraz akademii firm Mazel i Astor, potwierd­zonej ofic­jal­nymi certyfikatami);</li>
        <li>Możli­wości roz­woju w środowisku między­nar­o­dowym poprzez wyjazdy na zagraniczne uczel­nie tech­niczne w ramach pro­gramu wymi­any stu­den­tów Eras­mus+ (Wielka Bry­ta­nia, Niemcy, Francja, Hisz­pa­nia, Por­tu­galia, Czechy, Esto­nia i Litwa) oraz możli­wość uzyska­nia pod­wójnego dyplomu na niemieck­iej Tech­nis­che Hochschule Mit­tel­hessen, co jest unika­towe w skali polskiej;</li>
        <li>Zaję­cia prowad­zone przez doświad­c­zonych i kom­pe­tent­nych wykład­ow­ców, mocno zaan­gażowanych we współpracę między­nar­o­dową, z bogatym doświad­cze­niem we współpracy z zagranicznymi ośrod­kami naukowymi i najważniejszymi fir­mami z branży.</li>
        </ul>`,
        "specializations": [
          {
            "id": 1,
            "name": "Automatyka Przemysłowa",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
          {
            "id": 2,
            "name": "Przemysłowe systemy automatyki i robotyki",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          }
        ]
      },
      {
        "id": 2,
        "name": "Biznes Elektroniczny",
        "faculty": "Instytut Automatyki, Elektroniki i Elektrotechniki",
        "description": `
        Dynam­icznie rozwi­ja­jące się tech­nolo­gie kom­put­erowe, infor­ma­cyjne oraz inter­ne­towe doprowadz­iły do rewolucji w gospo­darce nada­jąc jej nowy glob­alny wymiar określany mianem Biz­nesu Elek­tron­icznego. Pośród pod­sta­wowych gałęzi Biz­nesu Elek­tron­icznego można między innymi wymienić: anal­i­tykę biz­ne­sową, komu­nikację elek­tron­iczną, bankowość i han­del elek­tron­iczny, reklamę inter­ne­tową, usługi w chmu­rach obliczeniowych, media społecznoś­ciowe oraz E-​learning. Prowadze­nie dzi­ałal­ności gospo­dar­czej przy uży­ciu sys­temów infor­maty­cznych stanowi obec­nie pod­stawę rozwi­ja­jącego się dynam­icznie społeczeństwa infor­ma­cyjnego. Jed­nocześnie wielu pra­co­daw­ców wskazuje na pogłębi­a­jący się niedobór wysoko wyk­wal­i­fikowanej kadry inżynier­skiej potrafiącej tworzyć i obsługi­wać sys­temy infor­maty­czne oraz tech­nolo­gie inter­ne­towe wspier­a­jące prowadze­nie dzi­ałal­ności gospo­dar­czej. Celem ksz­tałce­nia na kierunku Biznes Elek­tron­iczny jest przy­go­towanie spec­jal­istów posi­ada­ją­cych wiedzę, umiejęt­ności prak­ty­czne i kom­pe­tencje społeczne niezbędne do prowadzenia włas­nej dzi­ałal­ności gospo­dar­czej lub uzyska­nia atrak­cyjnej pracy w obszarze wyt­warza­nia e-​produktów i świad­czenia e-​usług.`,
        "benefits": `
        <ul>
        <li>Innowa­cyjny kierunek studiów związany z nowoczes­nymi tech­nolo­giami infor­ma­cyjnymi i inter­ne­towymi z per­spek­tywą atrak­cyjnej i dobrze płat­nej pracy.</li>
        <li>Stu­dia o pro­filu prak­ty­cznym, zapew­ni­a­jące semes­tralną prak­tykę zawodową w wiodą­cych w branży przed­siębiorstwach kra­jowych i kor­po­rac­jach międzynarodowych.</li>
        <li>Ponad 1000 godzin zajęć prak­ty­cznych w doskonale wyposażonych lab­o­ra­to­ri­ach spec­jal­isty­cznych real­i­zowanych przez kadrę posi­ada­jącą doświad­cze­nie praktyczne.</li>
        <li>Możli­wość kon­taktu z przed­siębior­cami i real­iza­cji dyplomów inżynier­s­kich w fir­mach z regionu i nie tylko.</li>
        <li>Możli­wość poz­na­nia komer­cyjnych sys­temów infor­maty­cznych stosowanych w Biz­ne­sie Elek­tron­icznym dostar­czanych przez wiodą­cych pro­du­cen­tów tj. IBM, SAP, SAS, Cisco czy Microsoft.</li>
        <li>Zaję­cia z zarządza­nia i ekonomiki przed­siębiorstw ukierunk­owane na prowadze­nie star­tupów, co daje ogromne szanse na sukces włas­nej firmy.</li>
        <li>Możli­wość otrzy­ma­nia nagrody na założe­nie włas­nej innowa­cyjnej firmy związanej z tech­nolo­giami ICT.</li>
        </ul>`,
        "specializations": []
      },
      {
        "id": 3,
        "name": "Elektrotechnika",
        "faculty": "Instytut Automatyki, Elektroniki i Elektrotechniki",
        "description": `
        Elek­trotech­nika jest dziedz­iną nauki i tech­niki związana z elek­trycznoś­cią. Zaj­muje się teorią oraz zas­tosowaniem zjawisk fizy­cznych z dziedziny elek­tryczności i mag­ne­tyzmu w różnych gałęzi­ach gospo­darki. Obe­j­muje zagad­nienia doty­czące energii elek­trycznej: wyt­warzanie, przesyłanie i użytkowanie; tech­nik pomi­arowych wielkości fizy­cznych oraz zagad­nienia związane z przetwarzaniem i anal­izą syg­nałów elek­trycznych. Kierunek studiów Elek­trotech­nika jest właś­ciwy dla osób zain­tere­sowanych przed­mio­tami ścisłymi i tech­niką. Służy zdoby­wa­niu wiedzy mery­to­rycznej i umiejęt­ności prak­ty­cznych związanych z pro­jek­towaniem, budową i eksploat­acją różnego rodzaju urządzeń i sys­temów elek­trycznych wyko­rzysty­wanych w różnych gałęzi­ach prze­mysłu i usług: pro­duk­cyjnych, zabez­piecza­ją­cych, łączeniowych, pomi­arowych i steru­ją­cych. Stu­denci Elek­trotech­niki uczą się kom­put­erowo wspo­ma­ganego pro­jek­towa­nia sieci i insta­lacji elek­trycznych, ochrony i zabez­piecza­nia oraz eksploat­acji urządzeń elek­trycznych. Poz­nają najnowsze tech­nolo­gie i urządzenia z zakresu użytkowa­nia energii elek­trycznej, pro­jek­towa­nia tzw. inteligent­nych budynków, tech­niki mikro­pro­ce­sorowej, pro­jek­towa­nia układów pomi­arowych oraz sys­temów diag­nos­ty­cznych i mon­i­torowa­nia, obsługi i pro­gramowa­nia układów steru­ją­cych. Celem ksz­tałce­nia na kierunku Elek­trotech­nika jest przy­go­towanie spec­jal­istów posi­ada­ją­cych wiedzę, umiejęt­ności prak­ty­czne i kom­pe­tencje społeczne niezbędne do pod­ję­cia pracy w wielu dziedz­i­nach gospo­darki pow­iązanych z elek­trycznoś­cią lub prowadzenia włas­nej dzi­ałal­ności gospo­dar­czej w tym obszarze.`,
        "benefits": `
        <ul>
        <li>Kierunek studiów w dziedzinie niezbęd­nej do funkcjonowa­nia wielu gałęzi prze­mysłu i usług z per­spek­tywą atrak­cyjnej i dobrze płat­nej pracy – cią­gle jest duży popyt na absol­wen­tów tego kierunku.</li>
        <li>Możli­wość zdoby­cia wszech­stron­nego wyk­sz­tałce­nia w bardzo ważnej, cią­gle rozwi­ja­jącej się dziedzinie z przy­go­towaniem do kreaty­wnego myśle­nia i dzi­ała­nia, pode­j­mowa­nia i real­iza­cji samodziel­nych zadań inżynier­s­kich oraz naukowo-​badawczych, jak również twór­czej pracy zespołowej.</li>
        <li>Absol­wenci kierunku Elek­trotech­nika stanowią poszuki­waną kadrę tech­niczną (w kraju i za granicą) dla dużych zakładów prze­mysłowych, mniejszych przed­siębiorstw i firm, w których wyko­rzysty­wane są różnorodne urządzenia elek­tryczne, elek­tron­iczne oraz komputerowe.</li>
        <li>Stu­denci odby­wają blisko 700 godzin zajęć prak­ty­cznych w doskonale wyposażonych lab­o­ra­to­ri­ach spec­jal­isty­cznych real­i­zowanych przez kadrę posi­ada­jącą doświad­cze­nie praktyczne.</li>
        <li>Stu­denci kierunku Elek­trotech­nika na UZ mają unikalną w skali kraju możli­wość stu­diowa­nia na Zin­te­growanych Stu­di­ach Zagranicznych Tech­nis­che Hochschule Mit­tel­hessen (Niemcy) i Uni­w­er­sytetu Zielonogórskiego i otrzy­ma­nia dyplomów ukończenia obu uczelni.</li>
        <li>Ukończe­nie studiów inżynier­s­kich na kierunku Elek­trotech­nika umożli­wia ubie­gani się o uprawnienia budowlane w spec­jal­ności insta­la­cyjnej w zakre­sie sieci, insta­lacji i urządzeń elek­trycznych i elektroenergetycznych.</li>
        </ul>`,
        "specializations": [
          {
            "id": 1,
            "name": "Cyfrowe Systemy Pomiarowe",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
          {
            "id": 2,
            "name": "Elektroenergetyka i Energoelektronika",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
          {
            "id": 3,
            "name": "Systemy Pomiarowe i Elektroenergetyka",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
        ]
      },
      {
        "id": 4,
        "name": "Informatyka",
        "faculty": "Instytut Automatyki, Elektroniki i Elektrotechniki",
        "description": `
        Infor­matyka to nowoczesna i dynam­icznie rozwi­ja­jąca się dziedz­ina wiedzy. Wiedza infor­maty­czna sze­roko wyko­rzysty­wana jest w prze­myśle oraz niemal wszys­t­kich sfer­ach życia pub­licznego. Cią­gle rozwi­ja­jące się tech­nolo­gie infor­maty­czne stały się impulsem do roz­woju prze­mysłu oraz społeczeństwa infor­ma­cyjnego. Zapotrze­bowanie na spec­jal­istów z branży IT rośnie w szy­bkim tem­pie. Często pra­co­dawcy mają prob­lem ze znalezie­niem odpowied­nio wyk­wal­i­fikowanej kadry infor­maty­cznej. Dlat­ego, atrak­cyjnej pracy dla dobrze wyk­sz­tał­conych infor­matyków nie zabraknie. Dziedz­ina Infor­matyka obe­j­muje między innymi: algo­ryt­mikę, struk­tury danych, pro­gramowanie struk­tu­ralne i obiek­towe, architek­tury kom­put­erów, sys­temy oper­a­cyjne, sieci kom­put­erowe, tech­nolo­gie i aplikacje mobilne, inżynierię opro­gramowa­nia, sys­temy baz danych i hur­townie danych, pro­jek­towanie sys­temów infor­maty­cznych, grafikę kom­put­erową, tech­nolo­gie Web oraz aplikacje inter­ne­towe, pro­gramowanie równoległe i rozpros­zone, bez­pieczeństwo sys­temów infor­maty­cznych oraz sieci kom­put­erowych, układy mikro­pro­ce­sorowe, prze­mysłowe sieci kom­put­erowe, testowanie sys­temów infor­maty­cznych, ele­menty sztucznej inteligencji. Głównym celem ksz­tałce­nia na kierunku Infor­matyka jest wyk­sz­tałce­nie spec­jal­istów posi­ada­ją­cych niezbędną wiedzę, umiejęt­ności prak­ty­czne oraz kom­pe­tencje społeczne do pod­ję­cia pracy w fir­mach branży IT, bądź wdraża­ją­cych nowoczesne rozwiąza­nia informatyczne.`,
        "benefits": `
        <ul>
        <li>Dynam­icznie rozwi­ja­jący się kierunek studiów umożli­wia­jący real­iza­cję oraz rozwi­janie włas­nych zainteresowań.</li>
        <li>Duże zapotrze­bowanie na dobrze wyk­sz­tał­conych infor­matyków ze strony przedsiębiorstw;</li>
        <li>Najbardziej pop­u­larny kierunek studiów w grupie nauk technicznych.</li>
        <li>Wysoko oce­niona jakość ksz­tałce­nia przez Państ­wową Komisję Akredy­ta­cyjną (wyróżnienie).</li>
        <li>Możli­wość poz­na­nia nowoczes­nych narzędzi, sprzętu oraz tech­nologii informatycznych.</li>
        <li>Zaję­cia real­i­zowane przez kadrę posi­ada­jącą dłu­go­let­nie doświad­cze­nie zawodowe.</li>
        <li>Możli­wość real­iza­cji zajęć lab­o­ra­to­ryjnych wyposażonych w nowoczesny sprzęt oraz komer­cyjne opro­gramowanie firm Microsoft, IBM, CISCO.</li>
        <li>Możli­wość real­i­zowa­nia włas­nych pomysłów w ramach kół studenckich.</li>
        <li>Możli­wość real­iza­cji prac dyplo­mowych we współpracy z zaprzy­jaźnionymi fir­mami branży IT jak również z innymi fir­mami z regionu.</li>
        <li>Możli­wość uzyska­nia cer­ty­fikatów ukończenia akademii Cisco i Microsoft.</li>
        <li>Możli­wość stu­diowa­nia oraz odby­wa­nia prak­tyk stu­denc­kich na uczel­ni­ach part­ner­s­kich w ramach pro­gramu Erasmus+.</li>
        </ul>`,
        "specializations": [
          {
            "id": 1,
            "name": "Inżynieria Systemów Mikroinformatycznych",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
          {
            "id": 2,
            "name": "Przemysłowe systemy informatyczne",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          },
          {
            "id": 3,
            "name": "Siecowe systemy informatyczne",
            "description": "",
            "knowledge": "",
            "jobs": "",
            "field": undefined,
          }
        ]
      }
    ]
  }



}
