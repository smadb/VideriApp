import { Category } from "./category.model";

export class Movie {
    id:number;
    name:string;
    link_api:string;
    release_date:Date;
    description:string;
    poster:string;
    casting:Array<string>;
    director:string;
    categories: Array<Category>;
    isSeen:boolean = false;

    constructor(id:number,name:string,link_api:string,release_date:Date,description:string,poster:string,casting:Array<string>,director:string,categories: Array<Category>, isSeen:boolean){
        this.id = id;
        this.name = name;
        this.link_api = link_api;
        this.release_date = release_date;
        this.description = description;
        this.poster = poster;
        this.casting = casting;
        this.director = director;
        this.categories = categories;
        this.isSeen = isSeen;
    }
}
