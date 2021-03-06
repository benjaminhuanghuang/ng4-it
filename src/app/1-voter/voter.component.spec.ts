import { TestBed, ComponentFixture } from "@angular/core/testing";
import { VoterComponent } from "./voter.component";

describe("VoterComponent", () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    //fixture.nativeElement
    //fixture.debugElement
  });

  it("should render total votes", () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.debugElement.query(By.css(".vote-count"));
  });
});
