import { Category } from "./category.model";
import { Reaction } from "./reaction.model";

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
    reactions:Array<Reaction>;
    isSeen:boolean = false;
    priority_to_see?:number;

    constructor(id:number,name:string,link_api:string,release_date:Date,description:string,poster:string,casting:Array<string>,director:string,categories: Array<Category>, reactions:Array<Reaction>, isSeen:boolean,priority_to_see?:number){
        this.id = id;
        this.name = name;
        this.link_api = link_api;
        this.release_date = release_date;
        this.description = description;
        this.poster = poster;
        this.casting = casting;
        this.director = director;
        this.categories = categories;
        this.reactions = reactions;
        this.isSeen = isSeen;
        if(this.isSeen = false){
            this.priority_to_see = priority_to_see;
        }
    }
}
