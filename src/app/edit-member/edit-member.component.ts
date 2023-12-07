import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],

  template: `
    Id: <input type="text" [(ngModel)] = "id" >
    ParentName: <input type="text" [(ngModel)] = "parentName" >
    DaughterName: <input type="text" [(ngModel)]= "daughterName" >
    Address: <input type="text" [(ngModel)] = "address" >
    Email: <input type="text" [(ngModel)]= "email" >
    PhoneNumber: <input type="text" [(ngModel)]= "phoneNumber" >
`
})
export class EditMemberComponent {

  constructor(private member: MemberService) { }

  @ViewChild('editMemberForm') editMemberForm: any;
  updateMember(updateMember: Member) {
    this.member.updateMember(updateMember)
    this.editMemberForm.reset();
  }
}