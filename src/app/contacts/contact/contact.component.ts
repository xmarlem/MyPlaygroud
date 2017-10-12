import { ContactsService } from './../contacts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactsService]
})
export class ContactComponent implements OnInit {

  contact: {id: number, name: string, email: string};

  paramsSubscription: Subscription; 

  constructor(private route:ActivatedRoute, private router:Router, private cService:ContactsService) { }

  ngOnInit() {
//  	console.log(this.route.snapshot.params);
    const c = this.cService.getContact(+this.route.snapshot.params['id']);

  	this.contact = {
  		id: c.id,
  		name: c.name,
  		email: c.email 
  	};

    //mi sottoscrivo ad ogni cambiamento dei parametri nella route

    this.paramsSubscription = this.route.params.subscribe(
      (params) => {
        
        const c = this.cService.getContact(parseInt(params['id'], 10));
        this.contact.id = c.id;
        this.contact.name = c.name;
        this.contact.email = c.email;
      
      }

    )


  }


  goToContacts(){
  	this.router.navigate(['/contacts']);

  }


  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
