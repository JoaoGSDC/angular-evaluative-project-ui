import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an array of users', () => {
    const mockUsers = [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
      {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      },
      {
        id: 10,
        email: 'byron.fields@reqres.in',
        first_name: 'Byron',
        last_name: 'Fields',
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
      },
      {
        id: 11,
        email: 'george.edwards@reqres.in',
        first_name: 'George',
        last_name: 'Edwards',
        avatar: 'https://reqres.in/img/faces/11-image.jpg',
      },
      {
        id: 12,
        email: 'rachel.howell@reqres.in',
        first_name: 'Rachel',
        last_name: 'Howell',
        avatar: 'https://reqres.in/img/faces/12-image.jpg',
      },
    ];

    service.findMany(2).subscribe((users) => {
      expect(users.data).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockUsers);
  });

  it('should return one user', () => {
    const mockUser = {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    };

    service.findOne(2).subscribe((user) => {
      expect(user.data).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockUser);
  });
});
