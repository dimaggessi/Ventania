import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form!: FormGroup;
  submitted = false;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.validation();
  }

  get f(): any { return this.form.controls; }

  private validation(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])

    });
  }

  // get name() { return this.form.get('name'); }
  // get email() { return this.form.get('email'); }
  // get message() { return this.form.get('message'); }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      alert('Invalid form! Please, fill the fields correctly')
      return;
    }
    alert(`${this.form.get('name')} your message was sent.`);
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }
}
