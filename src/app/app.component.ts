import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { S2Component } from "./s2/s2.component";
import { S3Component } from "./s3/s3.component";
import { S4Component } from "./s4/s4.component";
import { S5Component } from "./s5/s5.component";
import { S6Component } from "./s6/s6.component";
import { PerguntasComponent } from "./perguntas/perguntas.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, S2Component, S3Component, S4Component, S5Component, S6Component, PerguntasComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log("rolou")

    const listaElement = [
      {
        "lista": document.querySelectorAll('.left'),
        "classe": "toLeft"
      },
      {
        "lista": document.querySelectorAll('.right'),
        "classe": "toRight"
      }

    ];

    const toTop = window.innerHeight - 50

    listaElement.forEach(e => {
      e.lista.forEach(s => {
        s.getBoundingClientRect().top < toTop ?
          (
            s.classList.remove('anima'),
            s.classList.add(e.classe)
          )
          :
          (
            s.classList.add('anima'),
            s.classList.remove(e.classe)
          )
      });
    })
  }

}
