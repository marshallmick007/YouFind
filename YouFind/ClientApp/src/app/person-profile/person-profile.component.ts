import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Person } from "../models/person.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-person-profile",
  templateUrl: "./person-profile.component.html",
  styleUrls: ["./person-profile.component.scss"],
})
export class PersonProfileComponent implements OnInit {
  constructor(private router: Router) {
    var extras = this.router.getCurrentNavigation().extras; //.state.person;
    if (extras && extras.state && extras.state.person) {
      this.person = extras.state.person;
    } else {
      this.router.navigate([""]);
    }
  }
  person: Person;
  ngOnInit(): void {}
}
