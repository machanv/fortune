import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAnalysisComponent } from './article-analysis.component';

describe('ArticleAnalysisComponent', () => {
  let component: ArticleAnalysisComponent;
  let fixture: ComponentFixture<ArticleAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
