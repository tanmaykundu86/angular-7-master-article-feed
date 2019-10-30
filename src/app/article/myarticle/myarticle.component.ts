import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-myarticle",
  templateUrl: "./myarticle.component.html",
  styleUrls: ["./myarticle.component.css"]
})
export class MyarticleComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  articleData: any;
  userId = 10;
  userName = "admin";
  totLikes: number;
  likesArr: Array<Text>;
  totDisLikes: number;
  disLikesArr: Array<Text>;
  totComments: number;
  commentsArr: Array<Text>;

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
    this.getLikes();
    this.getDisLikes();
    this.getComments();
  }

  getLikes() {
    this.totLikes = 0;
    this.likesArr = [];
    this.articleData.forEach(childObj => {
      if (childObj.likes.find(x => x.authorId == this.userId)) {
        this.totLikes++;
        this.likesArr.push(childObj.articleName);
      }
    });
  }
  getDisLikes() {
    this.totDisLikes = 0;
    this.disLikesArr = [];
    this.articleData.forEach(childObj => {
      if (childObj.dislikes.find(x => x.authorId == this.userId)) {
        this.totDisLikes++;
        this.disLikesArr.push(childObj.articleName);
      }
    });
  }
  getComments() {
    this.totComments = 0;
    this.commentsArr = [];
    this.articleData.forEach(childObj => {
      if (childObj.comments.find(x => x.authorId == this.userId)) {
        this.totComments++;
        this.commentsArr.push(childObj.articleName);
      }
    });
  }
}
