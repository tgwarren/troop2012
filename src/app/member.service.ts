import { Injectable } from '@angular/core';
import { Member } from './models/Member';
import { HttpClient } from '@angular/common/http';
import {environment} from './../environments/environment';


type MembersResponse = {
  members: Member[];
}
type MemberResponse = {
  member: Member;
}

const membersEndPoint = `${environment.baseApiUrl}/api/members`;
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Member[] = []

  constructor(private http: HttpClient) { }


  fetchMembers() {
    return this.http.get<MembersResponse>(membersEndPoint).subscribe(response => {
      this.members = response.members
    })
  }

  addMember(member: Member) {
    return this.http.post<MemberResponse>(membersEndPoint, member).subscribe(response => {
      this.members = [...this.members, response.member]
    })
  }

  getMemberById(id: number) {
    return this.http.get<Member>(`${environment.baseApiUrl}/api/members/${id}`)
  }

  updateMember(member: Member) {
    return this.http.put<MemberResponse>(`${membersEndPoint}/${member.id}`, member).subscribe(response => {
      this.members = [...this.members, response.member]
    })

  }

  deleteMember(member: Member) {
    return this.http.delete<MemberResponse>(`${membersEndPoint}/${member.id}`).subscribe(() => {
      this.members = this.members.filter(m => +m.id !== +member.id)

    })
  }
}
