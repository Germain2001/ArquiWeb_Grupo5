import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepartmentComponent } from './page/department/department.component';
import { DeparmentListarComponent } from './page/department/deparment-listar/deparment-listar.component';
import { DepartmentEditarComponent } from './page/department/department-editar/department-editar.component';
import { DepartmentBuscarComponent } from './page/department/department-buscar/department-buscar.component';
import { DepartmentInsertComponent } from './page/department/department-insert/department-insert.component';
import { DepartmentDialogoComponent } from './page/department/deparment-listar/department-dialogo/department-dialogo.component';

import { ProvinceComponent } from './page/province/province.component';
import { ProvinceListarComponent } from './page/province/province-listar/province-listar.component';
import { ProvinceInsertComponent } from './page/province/province-insert/province-insert.component';
import { ProvinceDialogoComponent } from './page/province/province-listar/province-dialogo/province-dialogo.component';

import { AddressComponent } from './page/address/address.component';
import { AddressListarComponent } from './page/address/address-listar/address-listar.component';

import { DistrictComponent } from './page/district/district.component';
import { DistrictListarComponent } from './page/district/district-listar/district-listar.component';

import { PersonComponent } from './page/person/person.component';
import { PersonListarComponent } from './page/person/person-listar/person-listar.component';

import { ComplaintComponent } from './page/complaint/complaint.component';
import { ComplaintListarComponent } from './page/complaint/complaint-listar/complaint-listar.component';

import { UserComponent } from './page/user/user.component';
import { UserListarComponent } from './page/user/user-listar/user-listar.component';

import { PolicestationComponent } from './page/policestation/policestation.component';
import { PolicestationListarComponent } from './page/policestation/policestation-listar/policestation-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table'
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RolComponent } from './page/rol/rol.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginComponent } from './page/login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { ProvinceBuscarComponent } from './page/province/province-buscar/province-buscar.component';




@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DeparmentListarComponent,
    ProvinceComponent,
    ProvinceListarComponent,
    AddressComponent,
    AddressListarComponent,
    DistrictComponent,
    DistrictListarComponent,
    PersonComponent,
    PersonListarComponent,
    ComplaintComponent,
    ComplaintListarComponent,
    PolicestationComponent,
    PolicestationListarComponent,
    UserComponent,
    UserListarComponent,
    DepartmentInsertComponent,
    RolComponent,
    DepartmentEditarComponent,
    DepartmentBuscarComponent,
    DepartmentDialogoComponent,
    ProvinceInsertComponent,
    LoginComponent,
    ProvinceDialogoComponent,
    ProvinceBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
