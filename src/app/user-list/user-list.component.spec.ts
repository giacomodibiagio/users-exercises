import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {userReducer} from "../state/user.reducer";
import {MatTableModule} from "@angular/material/table";
import {StoreModule} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {User} from "./user.model";
import {MatDialogModule} from "@angular/material/dialog";

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        StoreModule.forRoot({users: userReducer}),
        MatDialogModule
      ],
      declarations: [ UserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('table should be displayed correctly', () => {
    let usersListTest: Observable<User[]> = of(
      [
        {
          "id":1,
          "name":"Leanne Graham",
          "username":"Bret",
          "city":"Gwenborough",
          "companyName":"Romaguera-Crona",
          "email":"Sincere@april.biz",
          "phone":"1-770-736-8031 x56442",
          "website":"hildegard.org",
          "address":"Kulas Light, 92998-3874, Gwenborough"
        },
        {
          "id":2,
          "name":"Ervin Howell",
          "username":"Antonette",
          "city":"Wisokyburgh",
          "companyName":"Deckow-Crist",
          "email":"Shanna@melissa.tv",
          "phone":"010-692-6593 x09125",
          "website":"anastasia.net",
          "address":"Victor Plains, 90566-7771, Wisokyburgh"
        },
        {
          "id":3,
          "name":"Clementine Bauch",
          "username":"Samantha",
          "city":"McKenziehaven",
          "companyName":"Romaguera-Jacobson",
          "email":"Nathan@yesenia.net",
          "phone":"1-463-123-4447",
          "website":"ramiro.info",
          "address":"Douglas Extension, 59590-4157, McKenziehaven"
        },
        {
          "id":4,
          "name":"Patricia Lebsack",
          "username":"Karianne",
          "city":"South Elvis",
          "companyName":"Robel-Corkery",
          "email":"Julianne.OConner@kory.org",
          "phone":"493-170-9623 x156",
          "website":"kale.biz",
          "address":"Hoeger Mall, 53919-4257, South Elvis"
        },
        {
          "id":5,
          "name":"Chelsey Dietrich",
          "username":"Kamren",
          "city":"Roscoeview",
          "companyName":"Keebler LLC",
          "email":"Lucio_Hettinger@annie.ca",
          "phone":"(254)954-1289",
          "website":"demarco.info",
          "address":"Skiles Walks, 33263, Roscoeview"
        },
        {
          "id":6,
          "name":"Mrs. Dennis Schulist",
          "username":"Leopoldo_Corkery",
          "city":"South Christy",
          "companyName":"Considine-Lockman",
          "email":"Karley_Dach@jasper.info",
          "phone":"1-477-935-8478 x6430",
          "website":"ola.org",
          "address":"Norberto Crossing, 23505-1337, South Christy"
        },
        {
          "id":7,
          "name":"Kurtis Weissnat",
          "username":"Elwyn.Skiles",
          "city":"Howemouth",
          "companyName":"Johns Group",
          "email":"Telly.Hoeger@billy.biz",
          "phone":"210.067.6132",
          "website":"elvis.io",
          "address":"Rex Trail, 58804-1099, Howemouth"
        },
        {
          "id":8,
          "name":"Nicholas Runolfsdottir V",
          "username":"Maxime_Nienow",
          "city":"Aliyaview",
          "companyName":"Abernathy Group",
          "email":"Sherwood@rosamond.me",
          "phone":"586.493.6943 x140",
          "website":"jacynthe.com",
          "address":"Ellsworth Summit, 45169, Aliyaview"
        },
        {
          "id":9,
          "name":"Glenna Reichert",
          "username":"Delphine",
          "city":"Bartholomebury",
          "companyName":"Yost and Sons",
          "email":"Chaim_McDermott@dana.io",
          "phone":"(775)976-6794 x41206",
          "website":"conrad.com",
          "address":"Dayna Park, 76495-3109, Bartholomebury"
        },
        {
          "id":10,
          "name":"Clementina DuBuque",
          "username":"Moriah.Stanton",
          "city":"Lebsackbury",
          "companyName":"Hoeger LLC",
          "email":"Rey.Padberg@karina.biz",
          "phone":"024-648-3804",
          "website":"ambrose.net",
          "address":"Kattie Turnpike, 31428-2261, Lebsackbury"
        }
      ]
    );
    component.users = usersListTest;
    expect(component.users).toEqual(usersListTest);
    fixture.detectChanges();
    // testing table rows
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toEqual(11);

    // testing table header
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe(' Name ');
    expect(headerRow.cells[1].innerHTML).toBe(' Username ');
    expect(headerRow.cells[2].innerHTML).toBe(' City ');
    expect(headerRow.cells[3].innerHTML).toBe(' Company name ');

    // testing table row 1
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBe(' Leanne Graham ');
    expect(row1.cells[1].innerHTML).toBe(' Bret ');
    expect(row1.cells[2].innerHTML).toBe(' Gwenborough ');
    expect(row1.cells[3].innerHTML).toBe(' Romaguera-Crona ');
  });

});
