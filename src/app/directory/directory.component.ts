import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  members: Member[] = [];
  member: any = {
    _id: '',
    parentName: '',
    daughterName: '',
    address: '',
    email: '',
    phoneNumber:'',
  };

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: any) => {
      this.members = data as Member[];
    });
  }

  //Updated Data
  loadMembers() {
    this.memberService.getMembers().subscribe((data: any) => {
      this.members = data;
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
    }else {
      console.log('Member ID is undefined.')
    }
  }

  //Delete Member
  deleteMember(id: string){
    this.memberService.deleteMember(id).subscribe((response) =>{
      console.log('Member deleted: ', response);
      this.loadMembers();
    })
  }
}

