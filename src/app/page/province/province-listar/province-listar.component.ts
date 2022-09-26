import { Province } from './../../../model/province';
import { MatTableDataSource } from '@angular/material/table';
import { ProvinceService } from './../../../service/province.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-listar',
  templateUrl: './province-listar.component.html',
  styleUrls: ['./province-listar.component.css']
})
export class ProvinceListarComponent implements OnInit {
  dataSource:MatTableDataSource<Province> = new MatTableDataSource();
  displayedColumns:string[]=['id','province','department']
  constructor(private pv:ProvinceService) { }

  ngOnInit(): void {
    this.pv.listar().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
