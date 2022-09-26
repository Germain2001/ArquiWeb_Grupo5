import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';
import {MatTableDataSource} from '@angular/material/table'
import { Complaint } from 'src/app/model/complaint';

@Component({
  selector: 'app-complaint-listar',
  templateUrl: './complaint-listar.component.html',
  styleUrls: ['./complaint-listar.component.css']
})
export class ComplaintListarComponent implements OnInit {
dataSource:MatTableDataSource<Complaint>=new MatTableDataSource();
displayedColumns:string[]=['id','name', 'policestation'];
  constructor(private ps:ComplaintService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


    })
  }

}
