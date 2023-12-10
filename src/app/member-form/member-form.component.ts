import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],

  // template: `
  //   ParentName: <input type="text" [(ngModel)]="member.parentName" /> DaughterName:
  //   <input type="text" [(ngModel)]="member.daughterName" /> Address:
  //   <input type="text" [(ngModel)]="member.address" /> Email:
  //   <input type="text" [(ngModel)]="member.email" /> PhoneNumber:
  //   <input type="text" [(ngModel)]="member.phoneNumber" />
  // `,
})
export class MemberFormComponent {
  newMemberForm = new FormControl('');
   
  members: Member[] = [];
  member: any = {
    _id: '',
    parentName: '',
    daughterName: '',
    address: '',
    email: '',
    phoneNumber: '',
  };


  constructor(private memberService: MemberService) {}

  //@ViewChild ('newMemberForm') newMemberForm: any;
  //Updated Data
  loadMembers() {
    this.memberService.getMembers().subscribe((data: any) => {
      this.members = data;
    });
  }

  //Create New Member
  createNewMember() {
    this.memberService.createNewMember(this.member).subscribe({
      next: (createNewMember) => {
        console.log('Member added successfully: ', createNewMember);
        this.loadMembers();
      },
      error: (error) => {
        console.error('Error adding member: ', error);
      },
    });
  }
}
