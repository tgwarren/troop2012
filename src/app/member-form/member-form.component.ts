import { Component, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],

  template: `
    ParentName: <input type="text" [(ngModel)] = "parentName" >
    DaughterName: <input type="text" [(ngModel)]= "daughterName" >
    Address: <input type="text" [(ngModel)] = "address" >
    Email: <input type="text" [(ngModel)]= "email" >
    PhoneNumber: <input type="text" [(ngModel)]= "phoneNumber" >
`
})
export class MemberFormComponent{

  constructor(private memberService: MemberService, private router: Router) { }

  @ViewChild('newMemberForm') newMemberForm: any;
  addMember(newMember: Member) {
    this.memberService.addMember(newMember)
    this.newMemberForm.reset();
    }
  }
