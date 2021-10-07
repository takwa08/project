import { Ministere } from "./ministere";

export class Societe
{
societe_id:number;
nomSociete:String;
nomSoc_ar:String;
adresseSoc:String;
numTel_Soc:number;
site_Soc:String;
ministere:Ministere
  constructor(societe_id:number,nomSociete:String,
    adresseSoc:String,
    numTel_Soc:number,
    site_Soc:String,ministere:Ministere){}
}
