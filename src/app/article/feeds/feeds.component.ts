import { Component, OnInit } from "@angular/core";
// import { DataService } from './service/data.service'
import { NgForm } from "@angular/forms";
import { DataService } from "../../data.service";

@Component({
  selector: "app-feeds",
  templateUrl: "./feeds.component.html",
  styleUrls: ["./feeds.component.css"]
})
export class FeedsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  articleData: any;
  userId = 10;
  userName = "admin";
  message: any;

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    /* this.dataService.getJSON().subscribe(data => {
        alert(data);
    }, err => {
      alert(err);
    });*/
    this.articleData = JSON.parse(localStorage.getItem("articleData"));
  }

  setLocalStorage() {
    localStorage.setItem("articleData", JSON.stringify(this.articleData));
  }

  likeCounter(id) {
    let totLikes;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        totLikes = childObj.likes.length;
      }
    });
    return totLikes;
  }
  disLikeCounter(id) {
    let totDisLikes;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        totDisLikes = childObj.dislikes.length;
      }
    });
    return totDisLikes;
  }
  commentsCounter(id) {
    let totComm;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        totComm = childObj.comments.length;
      }
    });
    return totComm;
  }

  onLike(id) {
    let counter = 0;
    let flag = false;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        const dislikes = childObj.dislikes;
        dislikes.forEach((dLike, index) => {
          if (dLike.authorId == this.userId) {
            dislikes.splice(index, 1);
          }
        });
        this.articleData[counter].dislikes = dislikes;

        const obj = {
          likesId: "1",
          authorId: this.userId,
          author: this.userName
        };
        childObj.likes.forEach((data, index) => {
          if (data.authorId == this.userId) {
            alert("You alreday liked.");
            flag = true;
          }
        });
        if (!flag) {
          this.articleData[counter].likes.push(obj);
        }
      }
      counter++;
    });

    this.setLocalStorage();
  }

  onDisLike(id) {
    let counter = 0;
    let flag = false;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        const likes = childObj.likes;
        likes.forEach((dLike, index) => {
          if (dLike.authorId == this.userId) {
            likes.splice(index, 1);
          }
        });
        this.articleData[counter].likes = likes;

        const obj = {
          likesId: "1",
          authorId: this.userId,
          author: this.userName
        };
        childObj.dislikes.forEach((data, index) => {
          if (data.authorId == this.userId) {
            alert("You alreday disliked.");
            flag = true;
          }
        });
        if (!flag) {
          this.articleData[counter].dislikes.push(obj);
        }
      }
      counter++;
    });
    this.setLocalStorage();
  }

  onSubmit(form: NgForm, id) {
    console.log(form.value);
    console.log(id);
    let counter = 0;
    this.articleData.forEach(childObj => {
      if (id == childObj.articleId) {
        const obj = {
          commentsId: this.getRandomInt(9999),
          description: form.value.message,
          authorId: this.userId,
          author: this.userName
        };
        this.articleData[counter].comments.push(obj);
      }
      counter++;
    });
    form.control.reset();
    this.setLocalStorage();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onDelete(comId, artId) {
    let counter = 0;
    this.articleData.forEach(childObj => {
      if (artId == childObj.articleId) {
        const comments = childObj.comments;
        comments.forEach((dLike, index) => {
          if (dLike.commentsId == comId) {
            comments.splice(index, 1);
          }
        });
        this.articleData[counter].comments = comments;
      }
      counter++;
    });
    this.setLocalStorage();
  }
}
