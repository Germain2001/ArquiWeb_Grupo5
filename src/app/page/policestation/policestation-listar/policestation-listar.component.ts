import { PoliceStation } from './../../../model/policestation';
import { PolicestationService } from './../../../service/policestation.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-policestation-listar',
  templateUrl: './policestation-listar.component.html',
  styleUrls: ['./policestation-listar.component.css']
})
export class PolicestationListarComponent implements OnInit {
dataSource:MatTableDataSource<PoliceStation>=new MatTableDataSource();
displayedColumns:string[]=['id','address', 'name','fono'];
  constructor(private ps:PolicestationService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


    })
  }

}
