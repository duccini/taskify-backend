import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusVaidadetionPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  // metadata é opcional, value é suficiente neste caso
  transform(value: string) {
    value = value.toLocaleUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
