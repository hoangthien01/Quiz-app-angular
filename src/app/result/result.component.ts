import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() correctNum: number = 0;
  @Input() inCorrectNum: number = 0;
  @Input() resultMessage: string = '';
  @Input() completionTime: number = 0;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  resetGame() {
    this.route.navigate(['/']);
  }
}
