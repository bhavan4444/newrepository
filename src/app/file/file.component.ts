import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:3000/posts/"
    }
};

  constructor() { }

  ngOnInit(): void {
  }

}
//"https://slack.com/api/files.upload" ,,,,,  .jpg,.png,.pdf,.docx,.txt,.gif,.jpeg

//          json-server --watch db.json