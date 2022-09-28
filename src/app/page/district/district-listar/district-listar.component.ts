import { Province } from 'src/app/model/province';
import { ProvinceService } from 'src/app/service/province.service';
import { Component, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/service/district.service';
import {MatTableDataSource} from '@angular/material/table'
import { District } from 'src/app/model/district';

@Component({
  selector: 'app-district-listar',
  templateUrl: './district-listar.component.html',
  styleUrls: ['./district-listar.component.css']
})
export class DistrictListarComponent implements OnInit {
  dataSource:MatTableDataSource<District> =new MatTableDataSource();
  displayedColumns:string[]=['id','district', 'province'];
  listaProvince: Province[] = [];
  constructor(private ps:DistrictService, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.provinceService.listar().subscribe(data => { this.listaProvince = data });
  }

}
