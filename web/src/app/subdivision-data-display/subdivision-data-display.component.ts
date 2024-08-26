import { Component, OnInit } from '@angular/core';
import { SubdivisionService } from './subdivision.service';
import { Subdivision } from './subdivision';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
  filteredAndSortedSubdivisions:Array<Subdivision>=[];
  selectedFilter = '';
  selectedSort = '';
  subdivisions: Array<Subdivision>=[];
  currentPage: number = 1;
  itemsPerPage: number = 20; // Number of subdivisions per page

  constructor(private subdivisionService:SubdivisionService) { }

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData() {
    // Load your data here
    this.subdivisions = [/* Data source */];
    this.subdivisionService.getSubdivisions().subscribe(data => {
      this.subdivisions = data?.subdivisions || [];
      this.filteredAndSortedSubdivisions =[...this.subdivisions]
    });
  }
  applyFilter() {
    let filtered = this.subdivisions;
console.log(this.selectedFilter);
console.log(filtered)
    if (this.selectedFilter) {
      filtered = filtered.filter(subdivision =>
        subdivision?.subdivisionStatusCode === this.selectedFilter
      );
    }

    this.filteredAndSortedSubdivisions = filtered;
    this.applySort();
  }
  applySort() {

    if (this.selectedSort === 'name') {
      console.log(this.selectedSort)
      this.filteredAndSortedSubdivisions.sort((a:Subdivision, b:Subdivision) =>
        (a.name).localeCompare((b.name))
      );
    } else if (this.selectedSort === 'date') {
      console.log(this.selectedSort)
      this.filteredAndSortedSubdivisions.sort((a:Subdivision, b:Subdivision) =>
        new Date(b.nearMapImageDate).getTime() - new Date(a.nearMapImageDate).getTime()
      );
    }
  }
}
