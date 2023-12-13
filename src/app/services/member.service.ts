import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MemberService {
  
  private apiUrl = 'http://localhost:3000/members'

  constructor(private http: HttpClient) {}

  // Get Members
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.apiUrl}`);
  }
  // Get Member
  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.apiUrl}/${id}`);
  }

  // Create New Member
  createNewMember(member: Member): Observable<Member> {
    console.log('Sending new information request from member: ', member);
    const newMember = {
      parentName: member.parentName,
      daughterName: member.daughterName,
      address: member.address,
      email: member.email,
      phoneNumber: member.phoneNumber,
    };
    console.log(newMember);
    return this.http.post<Member>(`${this.apiUrl}`, newMember);
  }

  // Update Member
  updateMember(member: Member): Observable<Member> {
    console.log('Sending update request from member: ', member);
    const updateMember = {
      id: member._id,
      parentName: member.parentName,
      daughterName: member.daughterName,
      address: member.address,
      email: member.email,
      phoneNumber: member.phoneNumber,
    };
    console.log(updateMember);
    return this.http.put<Member>(`${this.apiUrl}`, updateMember);
  }

  // Delete Member
  deleteMember(id: string): Observable<any> {
    return this.http.request('delete', `${this.apiUrl}`, {body: {id: id}});
  }
}
