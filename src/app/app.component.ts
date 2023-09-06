import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';
  course: string = '';
  courses: string[] = [];
  placeHolderText: string = 'Enter Course';
  errorMessage: string = '';
  filterdCourses: string[] = [];

  constructor() {}

  addCourse() {
    const courseAlreadyExists = this.courses.includes(
      this.course.toUpperCase()
    );
    if (courseAlreadyExists) {
      this.errorMessage = `${this.course} is already exists`;
    } else {
      this.courses.push(this.course.toUpperCase());
      this.course = '';
      this.errorMessage = '';
      this.filterdCourses = [...this.courses];
      this.searchCourse('');
    }
  }

  removeCourse(index: number) {
    this.filterdCourses.splice(index, 1);
  }

  searchCourse(event: any) {
    if (this.courses.length >= 5) {
      const serachText = event.target.value;
      this.filterdCourses = this.courses.filter((courseItem) => {
        return courseItem.includes(serachText.toUpperCase());
      });
    }
  }
}
