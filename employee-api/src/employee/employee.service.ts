import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return this.employeeRepo.findOneBy({ id });
  }

  async findByDocument(document_number: string) {
    if (document_number.length > 8) {
      throw new NotFoundException('Document number must be 8 digits or fewer');
    }
    const employee = await this.employeeRepo.findOneBy({ document_number });
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  create(dto: CreateEmployeeDto) {
    const emp = this.employeeRepo.create(dto);
    return this.employeeRepo.save(emp);
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.employeeRepo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
    Object.assign(employee, dto);
    return this.employeeRepo.save(employee);
  }

  async remove(id: number) {
    const employee = await this.employeeRepo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
    return this.employeeRepo.remove(employee);
  }

}
