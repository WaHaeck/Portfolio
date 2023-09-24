import { Injectable } from '@angular/core';
import { Observable, Subject, debounceTime } from 'rxjs';
import { Project } from '../model/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _hightlightedSkill = new Subject<string>();
  public get hightlightedSkill$(): Observable<string> {
    return this._hightlightedSkill.pipe(debounceTime(100));
  }

  private _hightlightedProject = new Subject<Project | null>();
  public get hightlightedProject$(): Observable<Project | null> {
    return this._hightlightedProject.asObservable();
  }

  public get projects(): Project[] {
    return [{
      name: 'FTRPRF',
      shortDescription: 'Digital learning platform',
      description: `
        I helped contributing to the digital learning platform of FTRPRF. With a focus on the front-end I helped developing features to let students complete exams.
      `,
      learnings: `
        Since this was my first experience within a bigger agile team I learned a lot about the agile way of working, project collaboration and teamwork. 
        Without any foreknowledge of React nor the codebase, I was able to fix some bugs during the first days of my internship. After the first week I could start working an my first feature.
      `,
      images: ['./assets/ftrprf/1.png', './assets/ftrprf/2.png', './assets/ftrprf/3.png'],
      tags: ['React', 'Redux', 'Typescript', 'HTML/CSS', 'Jira', 'Gitlab', 'Scrum', 'Agile', 'Javascript'],
      url: 'https://ftrprf.be/en/',
      roles: ['Internship', 'Front-end developer']
    }, {
      name: 'ArcelorMittal',
      shortDescription: 'Transfer learning and one-shot learning for surface inspection of flat steel',
      description: `I worked on my thesis about 'Transfer learning and one-shot learning for surface
      inspection of flat steel'. During my thesis, in collaboration with ArcelorMittal Gent, I researched how AI could be leveraged to classify surface defects of flat steel.
      I also implemented a model, which was trained with limited data (1-50 samples per class), to classify the surface defects.
      My work was rewarded with the ArcelorMittal 2020 master thesis award.
      `,
      learnings: `
        This project gave me the opportunity to learn more about computer vision, deep neural networks and transfer learning. 
        To prepare for this project I followed the 'Machine learning' and 'Deep learning' courses on Coursera.
      `,
      images: ['./assets/arcelorMittal/award.jpg'],
      tags: ['Research', 'Transfer learning', 'One-shot learning', 'Python', 'Tensorflow', 'Keras', 'Pitching', 'Project management', 'Deep Neural Networks', 'Machine learning'],
      links: [{
        label: 'Ward Haeck wins ArcelorMittal master thesis award',
        link: 'https://idlab.technology/news/awards/2020/11/10/Ward-Haeck-wins-ArcelorMittal-master-thesis-award.html'
      }],
      roles: ['Thesis student', 'Data scientist'],
    }, {
      name: 'Open Parking',
      shortDescription: 'Parking data monitor for the Netherlands',
      description: `
      During a period of four weeks I worked within a team of four people to visualize
      open parking data from the Netherlands. My job was to provide access to the data
      through a RESTful API. Some data analyses such as data inspecting and cleaning
      had to be done.`,
      learnings: `This was my first experience as a software engineer. On day 0 we started with only the client requirements, it was our task (a team of 4 people) to deliver an MVP/MMP after 4 weeks.
      For that we worked in sprints of 1 week, with 2 client meetings in between to inspect and validate.`,
      images: ['./assets/openparking/map.png', './assets/openparking/pitch.jpg', './assets/openparking/dashboard.png'],
      tags: ['Django', 'Python', 'Pitching', 'Scrum', 'Git', 'Agile', 'HTML/CSS', 'Javascript', 'Typescript'],
      url: 'https://www.openparking.nl/',
      roles: ['Student job', 'Back-end developer'],
      github: 'https://github.com/WaHaeck/open-parking'
    }, {
      name: 'Company websites',
      shortDescription: 'Numerous websites for SMEs',
      description: `
        During my free time I've created numerous websites for local Small and Medium Enterprises (SMEs)
        For some of these I collaborated with another developer.
      `,
      learnings: `
        These experiences enhanced my project management skills, emphasizing customer-centricity, ongoing client communication, and incremental development. 
        I also deepened my proficiency in React, integrated CMS for content management, and leveraged Google Firebase for some serverless projects.
        These skills have empowered me to create efficient and scalable web solutions, making me well-equipped to deliver exceptional digital experiences for SMEs and beyond.
      `,
      images: ['./assets/websites/haeck.png', './assets/websites/corepunt.png', './assets/websites/cartablanche.png', './assets/websites/cooleurs.png', './assets/websites/croqill.png', './assets/websites/lukaskraker.png'],
      links: [
        { label: 'haeck-busschaert', link: 'https://haeck-busschaert.be/' },
        { label: 'corepunt', link: 'https://corepunt.be/#/' },
        { label: 'assorti', link: 'https://assorti.be/' },
        { label: 'croqill', link: 'https://croqill.be/' },
        { label: 'lukaskraker', link: 'https://lukaskraker.be/#/' },
      ],
      tags: ['React', 'Angular', 'CMS', 'Git', 'Google Firebase', 'Project management', 'Javascript', 'Typescript', 'HTML/CSS'],
      roles: ['Full-stack developer'],
    },
    {
      name: 'Artbridger',
      shortDescription: 'Bridging Digital Art to the Physical World through NFTs',
      description: `
      ArtBridger is a captivating web application that aims to connect the fascinating world of NFTs (Non-Fungible Tokens) with the tangible realm of physical art. 
      This project was created as a hobby project out of a fascination for NFTs and the desire to explore their technical intricacies.
      `,
      learnings: `
        This project gave me the opportunity to learn more about NFTs. With the integration of Moralis I was able to easely interact with the blockchain. 
        With this project I also aimed on creating an innovative solution to the challenging problem on how to bridge digital art to the physical world.
      `,
      images: ['./assets/artbridger/connect.png', './assets/artbridger/cart.png', './assets/artbridger/checkout.png'],
      tags: ['React', 'Angular', 'CMS', 'Git', 'Javascript', 'Typescript', 'Moralis API', 'HTML/CSS'],
      roles: ['Founder', 'Full-stack developer'],
      github: 'https://github.com/WaHaeck/ArtBridger'
    }]
  }

  constructor() { }

  public HightlightSkill(skill: string): void {
    this._hightlightedSkill.next(skill);
  }

  public HightlightProject(project: Project | null): void {
    this._hightlightedProject.next(project);
  }

}
