import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Voila un peu de blabla',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Voila un peu de blabla encore une fois !',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Un petit dernier ?',
      content: 'Promis je ne fais plus rien maintenant !',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
