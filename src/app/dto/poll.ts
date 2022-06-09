export class Poll {
  constructor(public id:number,
              public title:string,
              public createBy:string,
              public upVote:number=0,
              public downVote:number=0){

  }
}
