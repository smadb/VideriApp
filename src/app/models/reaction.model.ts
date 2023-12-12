export class Reaction { //test/models/reaction.spec
    id:number;
    type:number; //1:first impression 2:second thought
    note:number;

    constructor(id:number,type:number,note:number){
        this.id = id;
        this.type = type;
        this.note = note;
    }
}
