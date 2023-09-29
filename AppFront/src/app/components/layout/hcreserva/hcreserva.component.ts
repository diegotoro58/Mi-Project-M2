import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-hcreserva',
  templateUrl: './hcreserva.component.html',
  styleUrls: ['./hcreserva.component.css']
})
export class HcreservaComponent {

  
  formulario: FormGroup;

  reservaService = inject(ReservasService)

  constructor() {
    this.formulario = new FormGroup({
      nombrecompleto: new FormControl(),
      email: new FormControl(),
      telnumero: new FormControl(),
      ciudad: new FormControl(),
      cpostal: new FormControl(),
      pais: new FormControl(),
      detallesviaje: new FormControl(),
      destino: new FormControl(),
      fechai: new FormControl(),
      fechaf: new FormControl(),
      numeroadultos: new FormControl(),
      numeronino: new FormControl(),
      tipohabit: new FormControl()
      
    })
  }

  async onSubmit() {
    const res = await this.reservaService.reservar(this.formulario.value);
    console.log(res)
  }

}
