export class Achievements { //test/models/achievements.spec
    id:number;
    name:string;
    icon:string;
    score_success:number;

    constructor(id:number,name:string,icon:string,score_success:number){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.score_success = score_success;
    }
}
