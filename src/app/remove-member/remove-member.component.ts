import { Component,  ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css'],

  template: `
    Id: <input type="text" [(ngModel)] = "id" >
`
})
export class RemoveMemberComponent  {
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

@ViewChild('removeMemberForm') removeMemberForm: any;
  //Delete Member
  deleteMember(id: string){
    this.memberService.deleteMember(id).subscribe((response) =>{
      console.log('Member deleted: ', response);
      this.loadMembers();
    })
  }
}