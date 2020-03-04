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
