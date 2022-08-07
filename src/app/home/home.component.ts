import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Cat } from '../model/cat';
import { CatService } from '../services/cat.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cats!: Cat[];
  public editCat!: Cat | null;
  public deleteCat!: Cat;
  public nullCat!: any;
  private apiServerUrl = environment.apiBaseUrl;

  isLoggedIn = false;
  username?: string;
  private roles: string[] = [];

  constructor(
    private catService: CatService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {
    this.getCats();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }

  }

  public getCats(): void {
    this.catService.getCats().subscribe(
      (response: Cat[]) => {
        this.cats = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCat(addForm: NgForm): void {
    //document.getElementById('add-cat-form').click();

    this.catService.addCat(addForm.value).subscribe(
      (response: Cat) => {
        console.log(response);
        this.getCats();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCat(cat: Cat): void {
    this.catService.updateCat(cat).subscribe(
      (response: Cat) => {
        console.log(response);
        this.getCats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCat(catId: number): void {
    this.catService.deleteCat(catId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCats(key: string): void {
    const results: Cat[] = [];
    for (const cat of this.cats) {
      if (
        cat.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        cat.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(cat);
      }
    }

    this.cats = results;
    if (results.length === 0 || !key) {
      this.getCats();
    }
  }

  public onOpenModal(cat: Cat, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCatModal');
    }
    if (mode === 'edit') {
      this.editCat = cat;
      button.setAttribute('data-target', '#updateCatModal');
    }
    if (mode === 'delete') {
      this.deleteCat = cat;
      button.setAttribute('data-target', '#deleteCatModal');
    }
    container?.appendChild(button);
    button.click();
  }
  // content?: string;

  // constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.getPublicContent().subscribe(
  //     data => {
  //       this.content = data;
  //     },
  //     err => {
  //       this.content = JSON.parse(err.error).message;
  //     }
  //   );
  // }
}
