import { Tutorial } from './../../models/tutorial.model';
import { Type } from 'src/app/models/type.model';
import { Component } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { TypeService } from 'src/app/services/type.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {


  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService , private typeService:TypeService) { }

  type?: Type[];
   id_type!:any;

   Tutorial?: Tutorial[];
   id_totorial!:any;

  ngOnInit(): void {



    this.gettype();
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data ,this.id_type)

      .subscribe({
        
        next: (res) => {
          console.log(this.id_type)
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }


  /*gettype(){
    this.typeService.getAll().subscribe(
      (res)=>{
        this.type=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
      
    )
  }*/

  gettype() {
    this.tutorialService.getAll().subscribe((data: Tutorial[]) => {
      
      console.log(data);
      this.Tutorial=data;    });
  }


}



