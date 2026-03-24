import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template: `

  <!-- Desktop Navbar -->
  <nav class="hidden md:flex justify-between items-center px-8 py-4 bg-white shadow-md">
    <h1 class="text-xl font-bold text-indigo-600">Festeve</h1>

    <div class="space-x-6">

      <!-- Common -->
      <a routerLink="/home" routerLinkActive="text-indigo-600" class="hover:text-indigo-600">Home</a>

      <!-- USER -->
      <ng-container *ngIf="isLoggedIn && role === 'USER'">
        <a routerLink="/search" routerLinkActive="text-indigo-600" class="hover:text-indigo-600">Search</a>
        <a routerLink="/orders" routerLinkActive="text-indigo-600" class="hover:text-indigo-600">Orders</a>
      </ng-container>

      <!-- PUROHIT -->
      <ng-container *ngIf="isLoggedIn && role === 'PUROHIT'">
        <a routerLink="/add" routerLinkActive="text-indigo-600" class="hover:text-indigo-600">Add Service</a>
        <a routerLink="/orders" routerLinkActive="text-indigo-600" class="hover:text-indigo-600">Bookings</a>
      </ng-container>

      <!-- Not Logged In -->
      <ng-container *ngIf="!isLoggedIn">
        <a routerLink="/login" class="hover:text-indigo-600">Login</a>
        <a routerLink="/signup" class="hover:text-indigo-600">Signup</a>
      </ng-container>

      <!-- Profile (only if logged in) -->
      <a *ngIf="isLoggedIn" routerLink="/profile" class="hover:text-indigo-600">Profile</a>

    </div>
  </nav>

  <!-- Mobile Bottom Navbar -->
  <nav class="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t md:hidden z-50">
    <div class="flex justify-around items-center py-2">

      <a routerLink="/home" routerLinkActive="text-indigo-600 scale-110"
         class="flex flex-col items-center text-gray-600 transition">
        <span class="text-xl">🏠</span>
        <span class="text-xs">Home</span>
      </a>

      <!-- USER -->
      <a *ngIf="isLoggedIn && role === 'USER'"
         routerLink="/search"
         routerLinkActive="text-indigo-600 scale-110"
         class="flex flex-col items-center text-gray-600 transition">
        <span class="text-xl">🔍</span>
        <span class="text-xs">Search</span>
      </a>

      <!-- PUROHIT -->
      <a *ngIf="isLoggedIn && role === 'PUROHIT'"
         routerLink="/add"
         routerLinkActive="text-indigo-600 scale-110"
         class="flex flex-col items-center text-gray-600 transition">
        <span class="text-xl">➕</span>
        <span class="text-xs">Add</span>
      </a>

      <a *ngIf="isLoggedIn"
         routerLink="/orders"
         routerLinkActive="text-indigo-600 scale-110"
         class="flex flex-col items-center text-gray-600 transition">
        <span class="text-xl">📦</span>
        <span class="text-xs">Orders</span>
      </a>

      <a *ngIf="isLoggedIn"
         routerLink="/profile"
         routerLinkActive="text-indigo-600 scale-110"
         class="flex flex-col items-center text-gray-600 transition">
        <span class="text-xl">👤</span>
        <span class="text-xs">Profile</span>
      </a>

      <!-- Not Logged In -->
      <a *ngIf="!isLoggedIn"
         routerLink="/login"
         class="flex flex-col items-center text-gray-600">
        <span class="text-xl">🔐</span>
        <span class="text-xs">Login</span>
      </a>

    </div>
  </nav>

  `
})
export class Navbar implements OnInit {

  isLoggedIn = false;
  role: string | null = null;

  ngOnInit() {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (token) {
      this.isLoggedIn = true;
      this.role = role;
    }
  }
}
