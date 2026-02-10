import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Members, memberItem } from '../../core/services/members';

@Component({
  selector: 'app-members-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage {
  private memberService = inject(Members);
  members$ = this.memberService.members$;

  addMember(member: memberItem): void {
    this.memberService.addMember(member);
  }

  deleteMember(id: number): void {
    this.memberService.deleteMember(id);
  }
}