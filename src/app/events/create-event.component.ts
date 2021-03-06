import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template: `<h1>New Event</h1><hr>
    <div class='col-md-6'>
        <app-contact-form></app-contact-form>
        <br>
        <br>
        <button type='submit' class='btn btn-primary'>Save</button>
        <button type='submit' class='btn btn-error' (click)="cancel()">Cancel</button>
    </div>`
})

export class CreateEventComponent {
    constructor(private router: Router) {}
    cancel() {
        this.router.navigate(['/events']);
    }
}
