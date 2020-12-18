import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    {
      title: "why the sky is below",
      content: "The sky is blue because it is."
    },
    {
      title: "what does an orange tastes like",
      content: "orange tastes like an orange."
    },
    {
      title: "what color is that cat?",
      content: "the cat is an orange color"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
