import { DepartmentEditarComponent } from './page/department/department-editar/department-editar.component';
import { ProvinceComponent } from './page/province/province.component';
import { DepartmentComponent } from './page/department/department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './page/address/address.component';
import { DistrictComponent } from './page/district/district.component';
import { PersonComponent } from './page/person/person.component';
import { UserComponent } from './page/user/user.component';
import { ComplaintComponent } from './page/complaint/complaint.component';
import { PolicestationComponent } from './page/policestation/policestation.component';
import { DepartmentInsertComponent } from './page/department/department-insert/department-insert.component';

const routes: Routes = [{
  path: 'department', component: DepartmentComponent, children: [
    {path: 'new', component: DepartmentInsertComponent},
    {path: 'modificar/:id', component: DepartmentEditarComponent}
  ]
}, {
  path: 'province', component: ProvinceComponent, children: []
},
{
  path: 'address', component: AddressComponent, children: []
},
{
  path: 'district', component: DistrictComponent, children: []
},
{
  path: 'person', component: PersonComponent, children: []
},
{
  path: 'user', component: UserComponent, children: []
},
{
  path: 'complaint', component: ComplaintComponent, children: []
},
{
  path: 'policestation', component: PolicestationComponent, children: []
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
