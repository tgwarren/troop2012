import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-listing',
  templateUrl: './member-listing.component.html',
  styleUrls: ['./member-listing.component.css']
})

export class MemberListingComponent{
  @Input() id!: number;
  @Input() parentName!: string;
  @Input() daughterName!: string;
  @Input() address?: string;
  @Input() email?: string;
  @Input() phoneNumber?: number;

  ngAfterViewInit() {
    console.log(this.id);
    console.log(this.parentName);
  }
}