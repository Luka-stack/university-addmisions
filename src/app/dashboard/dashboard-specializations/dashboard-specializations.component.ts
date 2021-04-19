import { Component, OnInit } from '@angular/core';
import { SpecializationModel } from 'src/app/shared/model/specialization.model';

@Component({
  selector: 'app-dashboard-specializations',
  templateUrl: './dashboard-specializations.component.html',
  styleUrls: ['./dashboard-specializations.component.css']
})
export class DashboardSpecializationsComponent implements OnInit {

  selectedId: number = -1;
  selected = false;
  specializations: Array<SpecializationModel>;

  constructor() { 
    this.specializations = [ 
      {
        "id": 1,
        "name": "Sieciowe systemy informatyczne",
        "description": "Pro­gram spec­jal­ności Sieciowe Sys­temy Infor­maty­czne opra­cow­ano z myślą o wyk­sz­tałce­niu absol­wenta posi­ada­jącego możli­wie wszech­stronną wiedzę ogólną z zakresu tech­nik tworzenia złożonych narzędzi infor­maty­cznych i admin­istrowa­nia sieci­ami kom­put­erowymi oraz sieci­ami mobil­nymi. Obe­j­muje pro­jek­towanie sys­temów infor­maty­cznych zgod­nie z najnowszymi tren­dami inżynierii opro­gramowa­nia. Pozwala na zapoz­nanie się ze środowiskami pro­gramowa­nia sek­wen­cyjnego i rozpros­zonego, tech­nikami grafiki kom­put­erowej, tworzenia cyfrowej ani­macji i cyfrowej obróbki obrazów wiz­yjnych. Absol­went przy­go­towany jest do pro­jek­towa­nia, instalowa­nia i admin­istrowa­nia sieci­ami kom­put­erowymi, jak również do tworzenia usług i admin­istrowa­nia w sieci­ach mobil­nych. Kończąc stu­dia absol­went posi­ada wiedzę potrzebną do uczest­niczenia w dużych pro­jek­tach infor­maty­cznych oraz pro­jek­towa­nia i eksploat­acji dużych sys­temów informacyjnych.",
        "knowledge": `
        <ul>
        <li>Przy­go­towany jest do pro­jek­towa­nia, instalowa­nia i admin­istrowa­nia sieci­ami kom­put­erowymi, jak również do tworzenia usług i admin­istrowa­nia w sieci­ach mobilnych.</li>
        <li>Zna tech­niki zapewnienia bez­pieczeństwa w sys­temach i sieci­ach kom­put­erowych. Posi­ada wiedzę potrzebną do uczest­niczenia w dużych pro­jek­tach infor­maty­cznych oraz pro­jek­towa­nia i eksploat­acji dużych sys­temów informacyjnych.</li>
        <li>Umie biegle stosować nowoczesne narzędzia kon­struowa­nia opro­gramowa­nia, łącząc możli­wości opro­gramowa­nia i sprzętu elasty­cznie dobier­a­jąc tech­niki rozwiązy­wa­nia prob­lemów informatycznych.</li>
        <li>Potrafi zapro­jek­tować i admin­istrować sieci kom­put­erowe i sieci mobilne.</li>
        </ul>`,
        "jobs": `
        <ul>
        <li>Pro­jek­tant i admin­is­tra­tor sieci kom­put­erowych i sieci mobilnych.</li>
        <li>Pro­gramista gier komputerowych.</li>
        <li>Pro­jek­tant sys­temów informatycznych.</li>
        <li>Pro­gramista urządzeń mobilnych.</li>
        <li>Spec­jal­ista ds. bez­pieczeństwa sys­temów kom­put­erowych i sieciowych.</li>
        <li>Pro­jek­tant aplikacji internetowych</li>
        <ul>`,
        "field": 
        { 
          "id": 1,
          "name": "Informatyka",
          "description": "",
          "benefits": "",
          "faculty": "",
          "specializations": undefined
        }
      }
    ]
  }

  ngOnInit(): void {
  }

  rowClicked(index: number): void {
    this.selectedId = index;
    this.selected = true;
  }
}
