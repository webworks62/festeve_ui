import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: "app-purohit",
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
      <!-- @if (isLoggedIn) {
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-4">Welcome {{ role }}</h1>

          @if (role === 'PUROHIT') {
            <p class="text-green-400">This is Purohit Dashboard</p>
          } @else if (role === 'ADMIN') {
            <p class="text-yellow-400">Redirecting to Admin...</p>
          } @else {
            <p class="text-blue-400">Redirecting to Home...</p>
          }
        </div>
      } @else {
        <div class="text-red-400 text-xl">
          Not logged in... Redirecting to Login
        </div>
      } -->
<div class="min-h-screen bg-gray-900 text-white p-6">

<div class="relative w-full ">

  <!-- Banner Image -->
  <img
    src="/assets/banners/bn1.png"
    alt="Banner"
    class="w-full h-[650px] object-cover rounded-4xl shadow shadow-2xl shadow-blue-500"
  >

  <!-- Center Text -->
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-white text-3xl md:text-5xl font-bold text-center">
      Festeve Purohit
    </h1>
  </div>

</div>

<div class="mt-8">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <!-- Card -->
     @for (item of PUROHITS_DATA; track item.id) {
    <p-card
            [style]="{ width: '100%', overflow: 'hidden' }"  >

        <ng-template #header>
            <img alt="Card" class="w-full" src="{{item.img}}" />
        </ng-template>

        <ng-template #title> {{item.name}}</ng-template>
        <ng-template #subtitle> {{item.specialization}}</ng-template>

        <p>
          Location :
           {{ item.location}}
        </p>
                <p>
                  Experience :
           {{ item.experience}}
        </p>
                        <p> Rateing :
           {{ item.rating}}
        </p>

        <ng-template #footer>
            <div class="flex gap-4 mt-1">
                <!-- <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true"></p-button> -->
                <p-button label="Book" class="w-full" (click)="checkLogin() "></p-button>
            </div>
        </ng-template>

    </p-card>
     }
  </div>
</div>


</div>
  `
})
export class PurohitComponent implements OnInit {

  isLoggedIn = false;
  role: string | null = null;

  PUROHITS_DATA: PurohitSli[] = [
    {
      id: 1,
      img: "https://i.pravatar.cc/300?img=1",
      name: "Pandit Ravi Sharma",
      location: "Hyderabad, Telangana",
      lat: 17.3850,
      long: 78.4867,
      rating: 4.8,
      specialization: "Vedic Pooja, Griha Pravesh",
      experience: 12
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/300?img=2",
      name: "Pandit Suresh Joshi",
      location: "Vijayawada, Andhra Pradesh",
      lat: 16.5062,
      long: 80.6480,
      rating: 4.5,
      specialization: "Marriage, Satyanarayana Vratham",
      experience: 10
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/300?img=3",
      name: "Pandit Ramesh Iyer",
      location: "Chennai, Tamil Nadu",
      lat: 13.0827,
      long: 80.2707,
      rating: 4.7,
      specialization: "Homam, Naming Ceremony",
      experience: 15
    },
    {
      id: 4,
      img: "https://i.pravatar.cc/300?img=4",
      name: "Pandit Mahesh Kulkarni",
      location: "Bangalore, Karnataka",
      lat: 12.9716,
      long: 77.5946,
      rating: 4.6,
      specialization: "Ganesh Pooja, Lakshmi Pooja",
      experience: 8
    },
    {
      id: 5,
      img: "https://i.pravatar.cc/300?img=5",
      name: "Pandit Anil Mishra",
      location: "Delhi, India",
      lat: 28.7041,
      long: 77.1025,
      rating: 4.9,
      specialization: "Vastu Shanti, Rudrabhishek",
      experience: 18
    },
    {
      id: 6,
      img: "https://i.pravatar.cc/300?img=6",
      name: "Pandit Karthik Rao",
      location: "Visakhapatnam, Andhra Pradesh",
      lat: 17.6868,
      long: 83.2185,
      rating: 4.4,
      specialization: "Gruha Pravesh, Navagraha Pooja",
      experience: 9
    },
    {
      id: 7,
      img: "https://i.pravatar.cc/300?img=7",
      name: "Pandit Vinay Tiwari",
      location: "Mumbai, Maharashtra",
      lat: 19.0760,
      long: 72.8777,
      rating: 4.6,
      specialization: "Wedding Rituals, Satyanarayana Pooja",
      experience: 14
    },
    {
      id: 8,
      img: "https://i.pravatar.cc/300?img=8",
      name: "Pandit Arjun Dixit",
      location: "Lucknow, Uttar Pradesh",
      lat: 26.8467,
      long: 80.9462,
      rating: 4.3,
      specialization: "Rudrabhishek, Pitru Pooja",
      experience: 11
    },
    {
      id: 9,
      img: "https://i.pravatar.cc/300?img=9",
      name: "Pandit Harish Chandra",
      location: "Pune, Maharashtra",
      lat: 18.5204,
      long: 73.8567,
      rating: 4.7,
      specialization: "Ganapati Homam, Lakshmi Pooja",
      experience: 13
    },
    {
      id: 10,
      img: "https://i.pravatar.cc/300?img=10",
      name: "Pandit Deepak Bhatt",
      location: "Ahmedabad, Gujarat",
      lat: 23.0225,
      long: 72.5714,
      rating: 4.5,
      specialization: "Vastu Pooja, Griha Shanti",
      experience: 10
    },
    {
      id: 11,
      img: "https://i.pravatar.cc/300?img=11",
      name: "Pandit Shyam Sundar",
      location: "Kolkata, West Bengal",
      lat: 22.5726,
      long: 88.3639,
      rating: 4.6,
      specialization: "Durga Pooja, Kali Pooja",
      experience: 16
    },
    {
      id: 12,
      img: "https://i.pravatar.cc/300?img=12",
      name: "Pandit Nitin Deshpande",
      location: "Nagpur, Maharashtra",
      lat: 21.1458,
      long: 79.0882,
      rating: 4.4,
      specialization: "Satyanarayana Pooja, Griha Pravesh",
      experience: 9
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  checkLogin() {

    alert("funtion work")
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    if (token) {
      this.isLoggedIn = true;
      this.role = role;

      // 🔥 Role-based redirect
      setTimeout(() => {
        if (role === "ADMIN") {
          this.router.navigate(["/admin-dashboard"]);
        } else if (role === "USER") {
          this.router.navigate(["/purohits"]);
        }
        // PUROHIT stays here
      }, 1000);

    } else {
      this.isLoggedIn = false;

      // ❌ No token → go to login
      setTimeout(() => {
        this.router.navigate(["/login"]);
      }, 1000);
    }
  }
}

export interface PurohitSli {
  id: number;
  img: string;
  name: string;
  location: string;
  lat: number;
  long: number;
  rating: number;
  specialization: string;
  experience: number; // in years
}
