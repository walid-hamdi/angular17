import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../../model/post';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private httpService = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/posts';

  getAll() {
    return this.httpService.get<Post[]>(this.baseUrl);
  }
}
