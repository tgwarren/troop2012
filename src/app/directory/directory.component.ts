import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {

  constructor(private memberService: MemberService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.memberService.fetchMembers()
  }

  getMembers() {
    return this.memberService.members;
  }

  addMemeber() {
    this.router.navigate(['/member-form']), { relativeTo: this.route }
  }
  editMember() {
    this.router.navigate(['/edit-member']), { relativeTo: this.route }
  }
  removeMember() {
    this.router.navigate(['/remove-member']), { relativeTo: this.route }
  }
}