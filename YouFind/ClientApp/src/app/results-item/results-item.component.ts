import { Component, OnInit, Input } from "@angular/core";
import { Person } from "../models/person.model";

@Component({
  selector: "app-results-item",
  templateUrl: "./results-item.component.html",
  styleUrls: ["./results-item.component.scss"],
})
export class ResultsItemComponent implements OnInit {
  @Input() person: Person;

  constructor() {}

  ngOnInit(): void {}
}
