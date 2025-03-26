import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // <-- required imports
  templateUrl: './app.component.html',
})
export class AppComponent {
  word: string = '';
  processedWord: string = '';

  constructor(private http: HttpClient) {}

  submitWord() {
    this.http.post<{ word: string }>('/api/process-word', { word: this.word })
      .subscribe(response => {
        this.processedWord = response.word;
      });
  }
}
