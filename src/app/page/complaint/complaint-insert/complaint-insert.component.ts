
import { Complaint } from './../../../model/complaint';
import { ComplaintService } from './../../../service/complaint.service';
import { PolicestationService } from './../../../service/policestation.service';
import { PoliceStation } from './../../../model/policestation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-insert',
  templateUrl: './complaint-insert.component.html',
  styleUrls: ['./complaint-insert.component.css']
})

export class ComplaintInsertComponent implements OnInit {
  complaint: Complaint = new Complaint();
  id: number = 0;
  edicion: boolean = false;
  listaPolicestation: PoliceStation[] = [];
  idPoliceStationSeleccionado: number = 0;
  mensaje: string = "";

  constructor(private complaintService: ComplaintService,
    private route: ActivatedRoute,
    private router: Router, private policestation: PolicestationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.policestation.listar().subscribe(data => { this.listaPolicestation = data });
  }

  aceptar() {
    if (this.complaint.NComplaint.length > 0 && this.idPoliceStationSeleccionado > 0) {
      let p = new PoliceStation();
      p.id = this.idPoliceStationSeleccionado;
      this.complaint.policeStation = p;

      if (this.edicion) {
        this.complaintService.modificar(this.complaint).subscribe(data => {
          this.complaintService.listar().subscribe(data => {
            this.complaintService.setLista(data);
          })
        })
      } else {
        this.complaintService.insertar(this.complaint).subscribe(data => {
          this.complaintService.listar().subscribe(data => {
            this.complaintService.setLista(data);
          })
        })
      }
      this.router.navigate(['complaint']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.complaintService.listarId(this.id).subscribe(data => {
        this.complaint = data
        console.log(data);
        this.idPoliceStationSeleccionado = data.policeStation.id;
      });

    }
  }

}
