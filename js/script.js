function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.1;  
    const nhifDeduction = 0.03; 
    const nssfDeduction = 0.05; 
  
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * taxRate;
    let nhif = grossSalary * nhifDeduction;
    let nssf = grossSalary * nssfDeduction;
  
    let totalDeductions = tax + nhif + nssf;
    let netSalary = grossSalary - totalDeductions;
  
    console.log("Gross Salary:", grossSalary);
    console.log("Tax:", tax);
    console.log("NHIF Deduction:", nhif);
    console.log("NSSF Deduction:", nssf);
    console.log("Net Salary:", netSalary);
  }
  
  
  calculateNetSalary(60000, 100000); 
  