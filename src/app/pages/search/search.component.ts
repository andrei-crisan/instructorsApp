import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router, 
    private matDialogRef : MatDialogRef<SearchComponent>) { }

  ngOnInit(): void {
  }

  findEntity(entityId) {
    this.router.navigateByUrl('/instructors/'.concat(entityId));
    this.getBack();
  }

  getBack() {
    this.matDialogRef.close();
  }

}
