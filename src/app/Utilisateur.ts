import { Group } from "./group";
import { Structure } from "./structure";


export class Utilisateur
{
  nom:string;
  prenom: string;
  nom_ar:string;
  prenom_ar:string;
  matricule:number;
  age:number;
  description:string;
  email:string
  codeP:string
  numTele:string
  adresse:string
  ville:string
  struct:Structure

constructor(matricule:number, nom:string, prenom: string,  nom_ar:string,  prenom_ar:string, age:number,  description:string,  email:string,  codeP:string,  numTele:string,  adresse:string,  ville:string,struct:Structure){}
}
//Long matricule, String nom, String prenom, String nom_ar, String prenom_ar, int age,
//String description, String email, int codeP, int numTele, String adresse, String ville, Group group
