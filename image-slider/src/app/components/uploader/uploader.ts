import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileSelect, FileDrop, FileUploader} from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'uploader',
  templateUrl: 'app/components/uploader/uploader.html',
  styleUrls: ['app/components/uploader/uploader.css'],
  directives: [FILE_UPLOAD_DIRECTIVES,FileSelect, FileDrop, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Uploader {
  private uploader:FileUploader = new FileUploader({url: URL});
   private hasBaseDropZoneOver:boolean = false;
   private hasAnotherDropZoneOver:boolean = false;

   private fileOverBase(e:any) {
     console.log('file over');
     this.hasBaseDropZoneOver = e;
   }

   private fileOverAnother(e:any) {
     this.hasAnotherDropZoneOver = e;
   }
}
