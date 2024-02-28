import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProyectsComponent } from '../../components/proyects/proyects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  position(event: any) {
    console.log(event.target.children[0].scrollTop);
    if(event.target.children[0].scrollTop >= window.innerHeight - 100) {
      console.log(event.target.children[0].scrollTop);
      console.log('hola');
      
      
    }else if(event.target.children[0].scrollTop < window.innerHeight - 100) {
      console.log(event.target.children[0].scrollTop);
      
    }
  }
}
