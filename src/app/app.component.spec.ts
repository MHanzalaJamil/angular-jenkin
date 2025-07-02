import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-jenkin'`, () => {
    expect(app.title).toEqual('angular-jenkin');
  });

  it('should have h1 as Hello World', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.queryselector('h1').textContent).toContain('Hello World');
  });
});
