import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-froala-edit',
  templateUrl: './froala-edit.component.html',
  styleUrls: [
    './froala-edit.component.scss',
    '../../../../../../node_modules/froala-editor/css/froala_editor.pkgd.min.css',
    '../../../../../../node_modules/froala-editor/css/froala_style.min.css',
    '../../../../../../node_modules/froala-editor/css/themes/dark.min.css',
    '../../../../../../node_modules/froala-editor/css/themes/red.min.css',
    '../../../../../../node_modules/froala-editor/css/themes/gray.min.css',
    '../../../../../../node_modules/froala-editor/css/themes/royal.min.css',
    '../../../../../../node_modules/font-awesome/css/font-awesome.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class FroalaEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
