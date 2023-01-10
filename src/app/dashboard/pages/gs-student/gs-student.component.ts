import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/auth/crud.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-gs-student',
  templateUrl: './gs-student.component.html',
  styleUrls: ['./gs-student.component.css']
})
export class GsStudentComponent implements OnInit {

  Student!:Student[];
  studentForm:FormGroup;

  constructor(
    public crud: CrudService, 
    public formBuilder: FormBuilder, 
    public router: Router,
    public act: ActivatedRoute,
    ) {
    this.studentForm = this.formBuilder.group({
      nom: [''],
      postnom: [''],
      prenom: [''],
      adresse: [''],
      telephone: [''],
      statusF: [''],
      
    })

    
   }



  ngOnInit(): void {

    this.crud.getAll().subscribe(res => {
      
      this.Student = res.map( e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        }as Student;
      })
     }) 

  }

  deleteStudent(Student: { id: string | undefined; }){
    if(confirm("Voulez vous supprimer cette information")){
      this.crud.deleteStudent(Student);
    }
  }

  
  
  onSubmit(){
   
    if(confirm("Voulez vous enregistrer")){

      this.crud.addStudent(this.studentForm.value);
      this.router.navigate(['/gs-student']);
    }
    
  };

}
