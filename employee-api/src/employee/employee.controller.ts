import {
  Controller, Get, Param, Post, Body, Put, Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @Get() findAll() { return this.service.findAll(); }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('document/:document_number')
  findByDocument(@Param('document_number') document_number: string) {
    return this.service.findByDocument(document_number);
  }

  @Post() create(@Body() dto: CreateEmployeeDto) {
    return this.service.create(dto);
  }

  @Put(':id') update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
