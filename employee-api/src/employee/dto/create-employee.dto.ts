import { IsString, IsNumber, IsDateString, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsString() name!: string;
  @IsString() @Length(1, 8) document_number!: string;
  @IsNumber() salary!: number;
  @IsNumber() age!: number;
  @IsString() profile!: string;
  @IsDateString() admission_date!: string;
}
