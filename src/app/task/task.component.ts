import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskName: string = "";
  taskList: {taskName:string, dueDate:string, checked:boolean, user:string, description:string}[] = [];
  users: object;
  hideInfoPop:boolean = true;

  index: number;
  task_name:string="";
  user_name:string="";
  task_date:string="No due date";
  task_description:string="";
  mark_as_done:boolean=false;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
          this.users = data;
      })
  }

  addTaskIntoList(){
    // this.taskName into array list
    this.taskList.push({
      "taskName":this.taskName,
      "dueDate":"No due date",
      "checked":false,
      "user":"",
      "description":""
    });
  }

  showInfoPopUp(INDEX, TASK_NAME){
      this.hideInfoPop = false;

      this.index = INDEX;
      this.task_name = TASK_NAME;

      //this.user_name = this.taskList[INDEX].user;
      this.task_date = this.taskList[INDEX].dueDate;
      this.task_description = this.taskList[INDEX].description;
  }

  hideInfoPopUp(){
      this.hideInfoPop = true;
  }

  markAsDone(){
    this.mark_as_done = true;
  }

  saveTaskInfo(){
    this.taskList[this.index] = {
      "taskName":this.task_name,
      "dueDate":this.task_date,
      "checked":this.mark_as_done,
      "user":this.user_name,
      "description":this.task_description
    };

    this.mark_as_done = false;
    this.task_description = "";
  }

  deleteItem(INDEX){
    this.taskList.splice(INDEX,1);
  }

}
