import { Component, signal } from '@angular/core';
import { ContactList } from './components/contact-list/contact-list';
import { Dashboard } from './components/dashboard/dashboard';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, ContactList, Dashboard, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
