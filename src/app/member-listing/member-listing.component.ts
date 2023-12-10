import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-member-listing',
  templateUrl: './member-listing.component.html',
  styleUrls: ['./member-listing.component.css']
})

export class MemberListingComponent implements OnInit{
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

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: any) => {
      this.members = data as Member[];
    });
  }

    // Get Member
    getMember(id: string) {
      if (id) {
        this.memberService.getMember(id).subscribe((memberData) => {
          this.member = memberData;
          console.log(memberData);
        });
      } else {
        console.log('Member Id is undefined');
      }
    }
}