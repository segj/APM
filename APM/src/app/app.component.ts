import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navvar navbar-expand navnbar-light bg-light>
      <a class='navbar-brand>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li> <a class='nav-link'>Home</<></li>
        <li> <a class='nav-link'>Product List</<></li>
      </ul>
    </nav>
  `
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}

