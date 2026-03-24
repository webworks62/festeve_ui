import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">

    <!-- 🌌 Background Animation -->
    <div class="absolute inset-0">
      <div class="absolute w-72 h-72 bg-indigo-500 opacity-30 blur-3xl rounded-full animate-pulse top-10 left-10"></div>
      <div class="absolute w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full animate-ping bottom-10 right-10"></div>
    </div>

    <!-- 🧾 Login Card -->
    <div class="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">

      <h2 class="text-3xl font-bold text-center mb-6">Login</h2>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">

        <!-- Email -->
        <input type="email" formControlName="email" placeholder="Email"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <p *ngIf="submitted && f['email'].errors" class="text-red-400 text-sm">
          Valid email required
        </p>

        <!-- Password -->
        <input type="password" formControlName="password" placeholder="Password"
          class="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

        <p *ngIf="submitted && f['password'].errors" class="text-red-400 text-sm">
          Password required
        </p>

        <!-- Button -->
        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 p-3 rounded-lg font-semibold">
          Login
        </button>

      </form>
    </div>
  </div>
  `
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  // ✅ initialize here
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  // ✅ Now fully typed
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    this.http.post<any>("http://192.168.1.21:5000/api/auth/login", this.loginForm.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          localStorage.setItem("role", res.user.role);

          this.routeByRole(res.user.role);
        },
        error: () => {
          alert("Invalid credentials");
        }
      });
  }

  routeByRole(role: string) {
    switch (role) {
      case "ADMIN":
        this.router.navigate(["/admin-dashboard"]);
        break;
      case "PUROHIT":
        this.router.navigate(["/purohits"]);
        break;
      default:
        this.router.navigate(["/purohits"]);
    }
  }
}
