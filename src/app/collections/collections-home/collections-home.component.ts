import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: "james", age: 25, job: "designer", employed: true },
    { name: "jill", age: 19, job: "engineer", employed: false },
    { name: "elyse", age: 32, job: "engineer", employed: true }
  ];

  headers = [
    {key: "employed", label: "Has a Job?"},
    { key: "name", label: "Name" },
    { key: 'age', label: "Age" },
    { key: "job", label: "Job" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
