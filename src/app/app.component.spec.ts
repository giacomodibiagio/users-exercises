import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserListComponent} from "./user-list/user-list.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'user-list', component: UserListComponent},
          {path: '', redirectTo: 'user-list', pathMatch: 'full'}
        ])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'users-exercises'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('users-exercises');
  });

  it('navigate to "" redirects you to /user-list', fakeAsync(() => {
    TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);
    router.initialNavigation();
    router.navigate(['']);
    tick()
    expect(location.path()).toBe('/user-list');
  }));
});
