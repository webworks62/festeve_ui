import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">

    <!-- 🌌 Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div class="absolute w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
      <div class="absolute w-72 h-72 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-bounce top-1/2 left-1/2"></div>
    </div>

    <!-- 🧾 Signup Card -->
    <div class="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">

      <h2 class="text-3xl font-bold text-center mb-6">Create Account</h2>

      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-4">

        <!-- First Name -->
        <input type="text" formControlName="firstName" placeholder="First Name"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <p *ngIf="submitted && f.firstName.errors" class="text-red-400 text-sm">First name required</p>

        <!-- Last Name -->
        <input type="text" formControlName="lastName" placeholder="Last Name"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <!-- Email -->
        <input type="email" formControlName="email" placeholder="Email"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <p *ngIf="submitted && f.email.errors" class="text-red-400 text-sm">Valid email required</p>

        <!-- Mobile -->
        <input type="text" formControlName="mobile" placeholder="Mobile"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <p *ngIf="submitted && f.mobile.errors" class="text-red-400 text-sm">10-digit mobile required</p>

        <!-- DOB -->
        <input type="date" formControlName="dob"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <!-- Password -->
        <input type="password" formControlName="password" placeholder="Password"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <p *ngIf="submitted && f.password.errors" class="text-red-400 text-sm">
          Min 6 characters required
        </p>

        <!-- Submit -->
        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 p-3 rounded-lg font-semibold">
          Sign Up
        </button>

      </form>
    </div>
  </div>
  `
})
export class SignupComponent {
  signupForm!: FormGroup<SignupFormType>;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {

    this.signupForm = this.fb.group({
      firstName: this.fb.control('', { nonNullable: true, validators: Validators.required }),
      lastName: this.fb.control('', { nonNullable: true }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      mobile: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)] }),
      dob: this.fb.control<string | null>(null),
      password: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] })
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) return;

    const payload = {
      ...this.signupForm.getRawValue(),
      role: "USER"
    };

    console.log(payload);

    this.http.post<any>("http://localhost:5000/api/auth/signup", payload)
      .subscribe({
        next: (res) => {
          console.log("Signup Success:", res);

          alert("Signup successful 🎉");

          // 👉 redirect to login
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.error("Signup Error:", err);

          if (err.error?.message) {
            alert(err.error.message);
          } else {
            alert("Something went wrong ❌");
          }
        }
      });

  }
}

// ✅ Type
type SignupFormType = {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
  dob: FormControl<string | null>;
  password: FormControl<string>;
};
