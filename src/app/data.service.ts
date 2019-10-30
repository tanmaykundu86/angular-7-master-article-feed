import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  /* public getJSON(): Observable<any> {
    return this.http.get("../../article.json");
  }*/

  public setDataToLocal() {
    if (localStorage.getItem("articleData") != '') {
      return true;
    }
    const data = [
      {
        articleName: "Why Developer",
        articleId: "1",
        description: "Technology is extremely fast moving, so developers need to be able to learn new programming languages and technologies, and adapt to the continually changing environment. Alongside learning about technology, developers will often learn about the business they are working in as well.",
        dislikes: [
          {
            likesId: 1,
            author: "John",
            authorId: 1
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          },
          {
            likesId: "2",
            authorId: 10,
            author: "admin"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
          {
            commentsId: "1",
            authorId: 3,
            description: "How are you",
            author: "Nikki"
          },
          {
            commentsId: "2",
            authorId: 4,
            description: "I am Fine",
            author: "Sam"
          }
        ],
        likes: [
          {
            likesId: "1",
            authorId: 1,
            author: "John"
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          }
        ]
      },
      {
        articleName: "Developers Need",
        articleId: "2",
        description: "If you strive and don’t really care about computers all that much, then software engineering will not be a good choice, because in order to be good, you need to spend countless, countless hours refining your craft, keeping up with the industry at large, getting to know every single little detail you should know to do your work properly.",
        dislikes: [
          {
            likesId: "1",
            authorId: 3,
            author: "Nikki"
          },
          {
            likesId: "2",
            authorId: 1,
            author: "John"
          }
        ],
        imagepath: "src/images/noImage.jpg",
        comments: [
          {
            commentsId: "1",
            authorId: 1,
            description: "What about you",
            author: "John"
          },
          {
            commentsId: "2",
            authorId: 2,
            description: "Its good",
            author: "Reddy"
          }
        ],
        likes: [
          {
            likesId: "1",
            authorId: 1,
            author: "John"
          },
          {
            likesId: "2",
            authorId: 2,
            author: "Reddy"
          }
        ]
      }
    ];

    localStorage.setItem('articleData', JSON.stringify(data));
  }
}
