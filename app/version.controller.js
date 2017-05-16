export class VersionController{
	constructor(BurgerService){
		this.name ='tortillas';
		this.version = '1.0.0';
		this.etat=false;
	}
	toggleVersion(){
		this.etat=!this.etat;
		return;
	}
}