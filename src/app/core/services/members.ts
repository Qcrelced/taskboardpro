import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TaskItem } from './task';

export interface memberItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class Members {
    private membersSubject = new BehaviorSubject<memberItem[]>([]);
    members$ = this.membersSubject.asObservable();
  
    addMember(member: memberItem): void {
      const newMember: memberItem = {
        ...member,
        id: Date.now(),
      };
      this.membersSubject.next([...this.membersSubject.value, newMember]);
    }
  
    deleteMember(id: number): void {
      const updatedMembers = this.membersSubject.value.filter(
        member => member.id !== id
      );
      this.membersSubject.next(updatedMembers);
    }
}
