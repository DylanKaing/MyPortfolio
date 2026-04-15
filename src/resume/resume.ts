import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'resume',
    templateUrl: './resume.html',
    styleUrls: ['./resume.css'],
    standalone: true,
    imports: [CommonModule,RouterModule]
})
export class ResumeComponent{

    pdfUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/DylanKaing414Resume.pdf');
    }
    
}