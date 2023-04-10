import { Component } from '@angular/core';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postList:any=[];
  errorMessage:any;
  constructor(private postService :PostsService){
  this.renderValues();
  }

  renderValues(){
    this.postService.GetAllPosts().subscribe(
     {
        next:data=>this.postList=data,
        error:error=>this.errorMessage=error

     })
}
}
