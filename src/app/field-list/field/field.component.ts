import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldModel } from '../../shared/model/field.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  fieldName: string;
  logoName: string;
  field: FieldModel;

  constructor(private activateRoute: ActivatedRoute) {
    this.fieldName = this.activateRoute.snapshot.params.name;
  }

  ngOnInit(): void {
    this.getFieldByName();
  }

  getFieldByName() {
    let name = "";

    if (this.fieldName === "automatyka-i-robotyka") {
      this.logoName = "robotics-logo.png";
      name = "Automatyka i Robotyka";
    }
    else if (this.fieldName === "biznes-elektroniczny") {
      this.logoName = "ecommerce-logo.png";
      name = "Biznes Elek­tron­iczny";
    }
    else if (this.fieldName === "elektrotechnika") {
      this.logoName = "electrotechnic-logo.png";
      name = "Elek­trotech­nika";
    }
    else if (this.fieldName === "informatyka") {
      this.logoName = "computer-science-logo.png";
      name = "Infor­matyka";
    }

    this.field = 
    {
      "id": 1,
      "name": name,
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
          "name": "Automatyka prze­mysłowa",
          "description": "",
          "knowledge": "",
          "jobs": "",
          "field": undefined,
        },
        {
          "id": 2,
          "name": "Prze­mysłowe sys­temy automatyki i robotyki",
          "description": "",
          "knowledge": "",
          "jobs": "",
          "field": undefined,
        }
      ]
    };
  }
}
