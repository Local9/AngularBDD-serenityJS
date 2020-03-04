import { AppComponent } from './app.component'
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { WelcomeService } from './service/welcome.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Data } from './domain/data';
import { of } from 'rxjs';

/* tslint:disable:no-unused-variable */

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let welcomeService;
  let getQuoteSpy;

  const testUrl = '/api/v1/welcome';
  const testData: Data = { message: 'Welcome' };

  beforeEach(async () => {
    welcomeService = jasmine.createSpyObj('WelcomeService', ['getWelcome']);
    getQuoteSpy = welcomeService.getWelcome.and.returnValue( of(testData) );

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {provide: WelcomeService, useValue: welcomeService }
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    welcomeService = TestBed.get(WelcomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Welcome'`, async(() => {
    fixture.detectChanges();
    expect(getQuoteSpy.calls.any()).toBe(true, 'getQuote called');
    expect(component.title).toBe('Welcome');
  }));
})


// import {
//   inject,
//   async,
//   fakeAsync,
//   tick,
//   ComponentFixture,
//   TestBed
// } from '@angular/core/testing';

// import { HttpClient, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { Observable } from 'rxjs/Observable';

// import { WelcomeService } from './service/welcome.service';
// import { AppComponent } from './app.component';
// import { Component } from '@angular/core';
// import { Data } from './domain/data';

// describe('AppComponent', () => {
//   const testUrl = '/api/v1/welcome';
//   const testData: Data = { message: 'Welcome' };

//   let fixture;
//   let component;
//   let welcomeService;
//   let spy;

//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;

//   beforeEach(
//     async(() => {
//       TestBed.configureTestingModule({
//         imports: [HttpClientTestingModule],
//         declarations: [
//           AppComponent
//         ],
//         providers: [
//           HttpTestingController,
//           HttpRequest,
//           WelcomeService,
//           {
//             provide: HttpClient, useFactory: (backendInstance: HttpTestingController, defaultOptions: HttpRequest) => {
//               return new HttpClient(backendInstance, defaultOptions);
//             },
//             deps: [HttpTestingController, HttpRequest]
//           }
//         ]
//       });

//       httpClient = TestBed.inject(HttpClient);
//       httpTestingController = TestBed.inject(HttpTestingController);

//       fixture = TestBed.createComponent(AppComponent);
//       component = fixture.debugElement.componentInstance;

//       welcomeService = fixture.debugElement.injector.get(WelcomeService);

//       // httpClient.get<Data>(testUrl).subscribe(data => {
//       //   expect(data).toEqual(testData);
//       // })

//       const observable: Observable<Response> = Observable.create(observer => {
//         const HttpResponse = new HttpResponse({
//           body: '{"message": "Welcome"}'
//         });
//         observer.next(new Response(HttpResponse));
//       });

//       spy = spyOn(welcomeService, 'getWelcome').and.returnValue(observable);
//     }));

//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });

//   it('should create an instance', () => {
//     expect(component).toBeTruthy();
//   });

//   it(`should have as title 'app'`, async(() => {
//     expect(component.title).toEqual('app');
//   }));

//   it(`should have as title 'Welcome'`, async(() => {
//     fixture.detectChanges();
//     expect(component.title).toEqual('Welcome');
//   }));

//   // it('should render title in a h1 tag', async(() => {
//   //   fixture.detectChanges();
//   //   const compiled = fixture.debugElement.nativeElement;
//   //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
//   // }));
// });
