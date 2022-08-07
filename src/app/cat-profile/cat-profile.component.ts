import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Cat } from '../model/cat';
import { CatService } from '../services/cat.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.css'],
})
export class CatProfileComponent implements OnInit {
  catId: number = 0;
  private sub!: Subscription;
  cat!: Cat;
  public editCat!: Cat | null;
  public deleteCat!: Cat;
  //characs: string[] = [];
  total: string | undefined;

  isLoggedInAdminOwner = false;
  isLoggedIn = false;
  username?: string;
  private roles: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CatService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.catId = parseInt(params['id']); //always a string
      this.catService
        .findOneCat(this.catId)
        .pipe(map((cat: Cat) => (this.cat = cat)))
        .subscribe(); /// because is an observable we need to sub
      console.log(this.cat);
    });

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.roles = user.roles;

      this.isLoggedInAdminOwner = this.roles.includes('ADMIN');
      if (this.isLoggedInAdminOwner == false)
          this.isLoggedInAdminOwner = this.roles.includes('OWNER');
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

  public onUpdateCat(cat: Cat): void {
    this.catService.updateCat(cat).subscribe(
      (response: Cat) => {
        console.log(response);
        // this.getCats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.reloadPage();
  }

  public onDeleteCat(catId: number): void {
    this.catService.deleteCat(catId).subscribe(
      (response: void) => {
        console.log(response);
        // this.getCats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
