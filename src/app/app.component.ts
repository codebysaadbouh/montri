import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  formValid: boolean = false;

  formGraph!: FormGroup;

    ngOnInit(): void {
    this.formGraph = this.formBuilder.group({
      x: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("^[1-9][0-9]*$")
      ]),
      y: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("^[1-9][0-9]*$")
      ]),
    });

    this.formGraph.valueChanges.subscribe(()=> {this.test()});

  }
  test () {
    this.formSubmitted = false;
        this.showGraphic = false;
        this.f_ = false;
    if(this.formGraph.valid) { this.formValid=true; } else {this.formValid=false; }
    
  }

  
  get get_formGraph() { return this.formGraph.controls; }

  func_showGraphic() {
     
   
      if(this.formValid) { // Formulaire valide
        this.formSubmitted = true;
        this.showGraphic = true;
        this.f_ = true;
      
      } else {
        this.formSubmitted = false;
        this.showGraphic = false;
        this.f_ = true;
      }
   
      // //Vérification des données
      // if (this.formGraph.invalid) {
      //   return;
      // }
      // else {
      //   this.formSubmitted = true;
      //   this.showGraphic = true;
        
      // }
      //
     
    }

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log('change');
      
      if(this.formGraph.valid) { this.formValid=true}
    }
}
