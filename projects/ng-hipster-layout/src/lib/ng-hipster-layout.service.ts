import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SidenavLink {
  route: string;
  title?: string;
  icon?: string;
}
@Injectable({
  providedIn: 'root',
})
export class NgHipsterLayoutService {
  private sidenavLinksBehaviorSubject = new BehaviorSubject<SidenavLink[]>([]);
  sidenavLinks = this.sidenavLinksBehaviorSubject.asObservable();

  constructor() {}

  setSidenavLinks(links: SidenavLink[]): Promise<void> {
    this.sidenavLinksBehaviorSubject.next(links);
    return Promise.resolve();
  }
}
