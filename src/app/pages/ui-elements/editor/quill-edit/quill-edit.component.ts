import { Component, OnInit } from '@angular/core';
import '../../../../../../node_modules/tinymce/tinymce.min.js';

@Component({
  selector: 'app-quill-edit',
  templateUrl: './quill-edit.component.html',
  styleUrls: ['./quill-edit.component.scss']
})
export class QuillEditComponent implements OnInit {
  public basicContent: string;
  constructor() { }

  ngOnInit() {
    this.basicContent = '<p>Hello...</p>';
  }

}
