import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RandomUserService } from '../random-user.service';
import { User } from '../random-user.interface';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user!: User;

  constructor(private randomUserService: RandomUserService) {
    this.loadUser();
  }

  private loadUser(): void {
    this.randomUserService.getRandomUser().subscribe((user: User) => {
      this.user = user;
    });
  }

}
