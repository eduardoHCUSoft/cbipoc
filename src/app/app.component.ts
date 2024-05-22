import { Component, OnInit } from '@angular/core';
declare var $Lightning: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'salesforcepoc';
  ngOnInit(): void {
    console.log('app init');
    this.loadlithningOut();
  }

  loadlithningOut() {
    console.log('testing lwc');
    $Lightning.use("c:POCOUT", 
      function() {
       $Lightning.createComponent("c:demopoc", {},
       document.getElementById("compContainer"),
           function() {
            console.log("c:load component");
           }
       );
      },
      "https://softtek34-dev-ed.develop.lightning.force.com"
    );
  }
}
