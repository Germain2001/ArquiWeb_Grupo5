import { District } from "./district";

export class Address{
    CAddress:number=0;
    NUrb:string="";
    NStreet:string="";
    NBlock:string="";
    NLot:number=0;
    district:District = new District();
}