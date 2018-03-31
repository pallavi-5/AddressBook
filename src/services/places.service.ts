export class PlacesService{
	private places:{displayName:string,phnumber:string,phtype:string}[]=[];
	addPlace(place:{displayName:string,phnumber:string,phtype:string}){
	this.places.push(place);
	}
	getPlaces(){
	return this.places.slice();
	}
}