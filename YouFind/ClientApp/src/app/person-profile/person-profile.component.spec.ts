import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonProfileComponent } from "./person-profile.component";
import { Router, Navigation, UrlTree, NavigationExtras } from "@angular/router";

describe("PersonProfileComponent", () => {
  let component: PersonProfileComponent;
  let fixture: ComponentFixture<PersonProfileComponent>;

  let routerServiceStub: Partial<Router>;
  let routerService: Router;

  beforeEach(async(() => {
    routerServiceStub = {
      getCurrentNavigation: (): Navigation => {
        let nav: Navigation = {
          id: 1,
          initialUrl: "/",
          extractedUrl: new UrlTree(),
          previousNavigation: null,
          trigger: "popstate",
          extras: null,
        };

        return nav;
      },
      navigate: (commands: any[], extras?: NavigationExtras) => {
        return null;
      },
    };

    TestBed.configureTestingModule({
      declarations: [PersonProfileComponent],
      providers: [{ provide: Router, useValue: routerServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProfileComponent);
    component = fixture.componentInstance;

    routerService = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
