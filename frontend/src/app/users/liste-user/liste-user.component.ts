import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/app/models/user';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  users: UserI[];
  errorMessage = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.errorMessage = `Probléme de connexion au serveur`;
        // alert('Erreur');
        console.log(error);
      }
    );
  }

}
