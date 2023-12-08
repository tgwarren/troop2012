import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    
  }

   cookies() {
    this.router.navigate(['/cookies']), { relativeTo: this.route }
  }
  fallProducts() {
    this.router.navigate(['/fall-products']), { relativeTo: this.route }
  }
  
}
