import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private angularFirestore: AngularFirestore) {}
  
   
    getAll(){
      return this.angularFirestore.collection('gs-student')
      .snapshotChanges();
    }

    
   

    addStudent(student:Student){
      return new Promise<any>((resolve, reject) => {
        this.angularFirestore.collection('gs-student')
        .add(student)
        .then(response => { }, error => reject(error))
        ;
        })
      } 

    
    deleteStudent(student: { id: string | undefined; }){
      return this.angularFirestore.collection('gs-student')
      .doc(student.id)
      .delete();
    }

    getStatus(){
      return this.angularFirestore.collection('gs-student')
      .snapshotChanges();
    }

    
}
