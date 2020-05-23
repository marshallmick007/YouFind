import { Component, OnInit, Input } from "@angular/core";
import { Person } from "../models/person.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-results-item",
  templateUrl: "./results-item.component.html",
  styleUrls: ["./results-item.component.scss"],
})
export class ResultsItemComponent implements OnInit {
  @Input() person: Person;
  @Input() searching: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProfile() {
    this.router.navigate(["person"], { state: { person: this.person } });
    //this.router.navigateByUrl()
  }
}
