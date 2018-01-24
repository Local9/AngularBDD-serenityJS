/* tslint:disable:no-unused-variable */

import {
  inject,
  async,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { Http, BaseRequestOptions, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WelcomeService } from './service/welcome.service';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let fixture;
  let component;
  let welcomeService;
  let spy;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        providers: [
          MockBackend,
          BaseRequestOptions,
          WelcomeService,
          {
            provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;

      welcomeService = fixture.debugElement.injector.get(WelcomeService);

      const observable: Observable<Response> = Observable.create(observer => {
        const responseOptions = new ResponseOptions({
          body: '{"message": "Welcome"}'
        });
        observer.next(new Response(responseOptions));
      });

      spy = spyOn(welcomeService, 'getWelcome').and.returnValue(observable);
    }
    ));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it(`should have as title 'Welcome'`, async(() => {
    fixture.detectChanges();
    expect(component.title).toEqual('Welcome');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  // }));
});
