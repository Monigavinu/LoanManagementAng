import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(public customerService: CustomerService,
    public toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    //get all loans
    this.customerService.getAllLoans();
  }

  
  //SUBMIT METHOD
  onSubmit(form: NgForm){
    console.log("Inside Submit...");
    console.log(form);
    this.addCustomer(form);

    //RESET FORM
    form.reset();



  }

  //INSERT CUSTOMER
  addCustomer(form?: NgForm){
    this.customerService.insertCustomer(form.value).subscribe(
      (response)=>{
        console.log(response);

        //AFTER SUCCESSFULL INSERTION , CALL TRIGGER REFRESH
        this.customerService.triggerRefreshList();

        //MESSAGE --TOASTR
        this.toastrService.success("Customer records has been inserted!",
        "EmpAppv2023")
      },
      (error)=>{
        console.log(error);
        this.toastrService.error("Something wrong...try again!","EmpAppv2023")
      }
    )

  }



  
  }


