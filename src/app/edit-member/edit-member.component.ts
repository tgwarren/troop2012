import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],

//   template: `
//     Id: <input type="text" [(ngModel)] = "id" >
//     ParentName: <input type="text" [(ngModel)] = "parentName" >
//     DaughterName: <input type="text" [(ngModel)]= "daughterName" >
//     Address: <input type="text" [(ngModel)] = "address" >
//     Email: <input type="text" [(ngModel)]= "email" >
//     PhoneNumber: <input type="text" [(ngModel)]= "phoneNumber" >
// `
})
export class EditMemberComponent {
  updateMemberForm = new FormControl('');
  members: Member[] = [];
  member: any = {
    _id: '',
    parentName: '',
    daughterName: '',
    address: '',
    email: '',
    phoneNumber: '',
  };

  constructor(private memberService: MemberService) { }

   //Updated Data
  loadMembers() {
    this.memberService.getMembers().subscribe((data: any) => {
      this.members = data;
    });
  }

  //@ViewChild('editMemberForm') editMemberForm: any;
  //Update Member
  updateMember() {
    if (this.member._id && this.member) {
      this.memberService.updateMember(this.member).subscribe({
        next: (updateMember) => {
          console.log('Member successfully update: ', updateMember);
          this.loadMembers();
        },
        error: (error) => {
          console.error('Error updating member: ', error);
        }
      });
    }
  }
}