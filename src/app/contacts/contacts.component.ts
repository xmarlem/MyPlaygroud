import { ContactComponent } from './contact/contact.component';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css'],
	providers: [ ContactsService ]
})
export class ContactsComponent implements OnInit {

	//mio array di contatti
	contacts: { 'id':number, 'name': string, 'email': string}[] = [];

	constructor(private cService: ContactsService) { }

  ngOnInit() {
			this.contacts = this.cService.contacts;
	}
	


}
