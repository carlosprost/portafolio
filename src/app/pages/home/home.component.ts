import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent,HeaderComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
