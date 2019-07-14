export class Post {

    title: string;
    content: string;
    created:Date;
    points:number;
    constructor(
      title: string,
      content: string
    ) {
      this.title = title;
      this.content = content;
      this.created=new Date();
      this.points=0;
    }
  
  }
  