import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import { SubdivisionService } from './subdivision.service';
import { of } from 'rxjs';

describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
  let subdivisionService: SubdivisionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [SubdivisionDataDisplayComponent],
      providers: [SubdivisionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    subdivisionService = TestBed.inject(SubdivisionService);

    // Mock data
    const mockData = {
      subdivisions: [
        {
          id: 1,
          name: 'Subdivision A',
          nearMapImageDate: '2024-08-26T00:00:00.000Z'
        },
        {
          id: 2,
          name: 'Subdivision B',
          nearMapImageDate: '2024-08-20T00:00:00.000Z'
        }
      ]
    };

    spyOn(subdivisionService, 'getSubdivisions').and.returnValue(of(mockData));

    fixture.detectChanges();
  });

  it('should sort subdivisions by NearMap Image Date in descending order', () => {
    component.selectedSort = 'date';
    component.applyFilter(); // Ensure initial filtering and sorting
    fixture.detectChanges();

    expect(component.filteredAndSortedSubdivisions[0].name).toBe('Subdivision A');
    expect(component.filteredAndSortedSubdivisions[1].name).toBe('Subdivision B');
  });

  // Additional tests would include:
  // - Verifying that the applyFilter method filters correctly based on selectedFilter
  // - Testing sorting by name
  // - Ensuring the component renders correctly with pagination
  // - Handling edge cases such as empty data or invalid dates

});
