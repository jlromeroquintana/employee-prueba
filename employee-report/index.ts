import * as sql from 'mssql';
import * as dotenv from 'dotenv';
import * as ExcelJS from 'exceljs';
import * as nodemailer from 'nodemailer';

dotenv.config();

const pool = new sql.ConnectionPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  options: { encrypt: false }
});

(async () => {
  const startDate = process.env.START_DATE || '2021-01-01';
  const endDate = process.env.END_DATE || '2022-12-31';
  await pool.connect();
  const result = await pool.request().query(
    `SELECT * FROM Employee WHERE admission_date BETWEEN '${startDate}' AND '${endDate}'`
  );

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Empleados');
  sheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Nombre', key: 'name' },
    { header: 'Documento', key: 'document_number' },
    { header: 'Salario', key: 'salary' },
    { header: 'Edad', key: 'age' },
    { header: 'Perfil', key: 'profile' },
    { header: 'Fecha Ingreso', key: 'admission_date' },
  ];
  sheet.addRows(result.recordset);
  await workbook.xlsx.writeFile('reporte.xlsx');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'franco.paredes@oechsle.pe',
    subject: 'Reporte Empleados - Examen Técnico Oechsle',
    text: 'Adjunto reporte en Excel.',
    attachments: [{ filename: 'reporte.xlsx', path: './reporte.xlsx' }],
  });
})();
