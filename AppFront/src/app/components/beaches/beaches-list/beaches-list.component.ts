import { Component, inject, signal } from '@angular/core';
import { BeachesService } from 'src/app/service/beaches.service';


@Component({
  selector: 'app-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.css']
})
export class BeachesListComponent {

  arrBeaches = signal<any[]>([])

  beachesService = inject(BeachesService)

  async ngOnInit(){
    const beach = await this.beachesService.getAll();
    this.arrBeaches.set(beach)
  }
}
