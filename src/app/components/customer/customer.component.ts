import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../../model/post';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  posts: Post[] = [];
  postService: MasterService = inject(MasterService);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAll().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error) => {},
    });
  }
}
