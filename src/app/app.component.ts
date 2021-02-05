import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) {
  }
  title = 'montri';
  x: '' = "";
  y: '' = "";
  showGraphic : boolean = false;
  formSubmitted  : boolean = false;
  f_ : boolean = false;

  formGraph!: FormGroup;

    ngOnInit(): void {
    this.formGraph = this.formBuilder.group({
      x: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("^[1-9][0-9]*$")
      ]),
      y: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("^[1-9][0-9]*$")
      ]),
    });
  }

  
  get get_formGraph() { return this.formGraph.controls; }
  
  func_showGraphic() {
      this.f_ = true;
      if (this.formGraph.invalid) {
        return;
      }
      else {
        this.formSubmitted = true
        console.log(this.get_formGraph.x.value);
        console.log(this.get_formGraph.y.value);
        this.showGraphic = true;
      }
     
    }
}
