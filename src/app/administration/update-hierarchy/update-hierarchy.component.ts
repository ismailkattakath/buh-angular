import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-hierarchy',
  templateUrl: './update-hierarchy.component.html',
  styleUrls: ['./update-hierarchy.component.scss']
})
export class UpdateHierarchyComponent implements OnInit {

  nodes = null;

  constructor() {
    this.nodes = [
      {
        id: 1,
        name: 'root1',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
