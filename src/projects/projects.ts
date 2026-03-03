import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'projects',
    templateUrl: './projects.html',
    styleUrls: ['./projects.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class ProjectsComponent{

    projects = [
        {
            id: 1,
            title: 'Cyberspace Discussion Board',
            description: 'Cybersecurity project highlighting different vulnerabilites and how to combat against them. Such as proper handshakes, authentication, encryption and signatures. To prevent any malicious intents. To highlight these problems a discussion board environment is being used to demonstrate a resource server, authentication server and the app itself on another.',
            tags: ['SpringBoot', 'Java', 'JavaScript', 'React', 'BCrypt'],
            github: 'https://github.com/DylanKaing/Cyberspace',
            // demo: ''
        },
        {
            id: 2,
            title: 'AWS Attendance Tracker',
            description: 'Simple project to learn AWS. Which consists of a simple QR-based attendance system that allows teachers to generate a session-specific QR code for their class. Students scan the QR code, enter their student ID, and are automatically marked present. Teachers can view attendance reports using the generated session ID, and they receive email notifications each time a student submits attendance.',
            tags: ['Python', 'AWS', 'CloudWatch', 'Lambdas', 'CloudFront', 'SNS', 'DynamoDB', 'S3', 'API Gateway'],
            github: 'https://github.com/DylanKaing/AWS-Final-Project'
        },
        {
            id: 3,
            title: 'Battleship',
            description: 'Simple battleship project made for web application class to learn React.',
            tags: ['React', 'JavaScript', 'CSS', 'HTML'],
            github: 'https://github.com/DylanKaing/Battleship'
        },
        {
            id: 4,
            title: 'Custom-Malloc',
            description:'A custom dynamic memory allocator in C that implements `malloc` and `free` from scratch using `sbrk`, featuring first-fit block search, block splitting, and coalescing of free blocks.',
            tags:['C','Linux'],
            github: 'https://github.com/DylanKaing/custom-malloc'
        },
        {
            id:5,
            title: 'Opengl-Model-Viewer',
            description: 'An interactive 3D shape viewer in C using OpenGL, with procedural geometry generation, mesh file loading, and a hand-built linear algebra library. ',
            tags:['C','OpenGL','Linux'],
            github: 'https://github.com/DylanKaing/OpenGL-Model-Viewer'
        },
        {
            id: 6,
            title: 'Note App',
            description: 'In progress 2/19',
            tags: ['Java','SpringBoot','Angular'],
            github: 'https://github.com/DylanKaing/NoteApp'
        }
        
    ]
    
}