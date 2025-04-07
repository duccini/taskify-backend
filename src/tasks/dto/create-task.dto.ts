// when create a DTO we must think the first point where we retrive our
// data, in this case will be in the controller

import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
