import { Injectable } from "@angular/core";

@Injectable()
export class ContactsService{

    contacts = [
        
              {
                  id: 1,
                  name: 'Marco',
                  email: 'marco@gmail.com'
        
              },
              {
                  id: 2,
                  name: 'Michela',
                  email: 'michela@gmx.com'
              }
          ];

    getContacts(){
        return this.contacts;
    }

    getContact(id:number){
        console.log("GetContact: "+ id);
        const c:{id:number, name:string, email:string} = this.contacts.find( 
            (ss) => { 
               // console.log("dentro la find: " + s.id +" id:" + id); 
                return ss.id === id
            });
        console.log("Contatto trovato: " + this.contacts.find( x => x.id == id));

        return c;
    }

    updateContact(id:number, name:string, email:string){
        //prima cerco il mio elemento 
        const c = this.contacts.find(
            (c) => { return c.id === id }
        );
        if(c) {
            c.name = name;
            c.email = email;
        }
    }


    addContact(id:number, name:string, email:string){
        this.contacts.push({'id': id, 'name': name, 'email': email});
    }




}