import { Component } from '@angular/core';
import { ProgramService } from '../service/program-service';
import { ProgramModel } from '../../model/program-model';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgIf, NgForOf],
  templateUrl: './program.html',
  styleUrls: ['./program.css']
})
export class Program {
  programs = ['btech', 'mtech', 'bba', 'bcm'];

  departmentsMap: { [key: string]: string[] } = {
    btech: ['CSE', 'ECE', 'Civil'],
    mtech: ['CSE', 'ECE', 'Civil'],
    bba: ['Finance', 'Marketing', 'HR'],
    bcm: ['Media', 'Advertising', 'PR']
  };

  selectedProgram: string = '';
  selectedDepartment: string = '';
  programId!: number;
  availableSeats!: number;
  message: string = '';

  constructor(private programService: ProgramService) {}

  saveProgram() {
    if (!this.programId || !this.selectedProgram || !this.selectedDepartment || this.availableSeats == null) {
      this.message = 'Please fill all fields';
      return;
    }

    const programData: ProgramModel = {
      programId: this.programId,
      program: this.selectedProgram,
      department: this.selectedDepartment,
      availableSeats: this.availableSeats
    };

    this.saveProgramWithRetry(programData);
  }

  saveProgramWithRetry(programData: ProgramModel, retryCount: number = 0) {
  this.programService.saveProgram(programData).subscribe({
    next: (res: any) => {
      if (res && res.status === 'success') {
        this.message = 'Program saved successfully.';
      } else {
        if (res.message.includes("Row was updated or deleted") && retryCount < 3) {
          this.message = 'Data has been modified by another user. Trying to save again...';
          setTimeout(() => {
            this.saveProgramWithRetry(programData, retryCount + 1);
          }, 1000); // wait for 1 second before retrying
        } else {
          this.message = 'Save failed: ' + (res.message || 'Unknown error');
        }
      }
    },
    error: (err: any) => {
      console.error(err);
      this.message = 'Error saving program: ' + (err.error && err.error.message ? err.error.message : 'Unknown error');
    }
  });
}
}