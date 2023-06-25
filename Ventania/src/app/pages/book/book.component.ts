import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  public isChecked: boolean = false;
  public firstTitle: string = '';
  public secondTitle: string = '';
  public thirdTitle: string = '';
  public firstPrice: string = '';
  public firstDaily: string = '';
  public secondPrice: string = '';
  public secondDaily: string = '';
  public thirdPrice: string = '';
  public thirdDaily: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.changeText(this.isChecked);
  }

  onCheck(event: any): void {
    if (event.target.checked) {
      this.isChecked = true;
      this.changeText(this.isChecked);
    }
    else {
      this.isChecked = false;
      this.changeText(this.isChecked);
    }
  }

  changeText(status: boolean) {
    if (status) {
      this.firstTitle = 'TWO WEEKS';
      this.secondTitle = 'A MONTH PREMIUM';
      this.thirdTitle = 'THREE WEEKS';
      this.firstPrice = '$195.86';
      this.firstDaily = '$13.99 / night';
      this.secondPrice = '$359.70';
      this.secondDaily = '$11.99 / night';
      this.thirdPrice = '$272.79';
      this.thirdDaily = '$12.99 / night';
    }
    else{
      this.firstTitle = 'THREE DAYS';
      this.secondTitle = 'A WEEK PREMIUM';
      this.thirdTitle = 'FIVE DAYS';
      this.firstPrice = '$59.99';
      this.firstDaily = '$19.99 / night';
      this.secondPrice = '$104.93';
      this.secondDaily = '$14.99 / night';
      this.thirdPrice = '$84.95';
      this.thirdDaily = '$16.99 / night';
    }
  }
}
