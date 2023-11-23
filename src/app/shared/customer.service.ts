import { Injectable } from '@angular/core';
import { Customerdetails } from '../customerdetails';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loandetails } from '../loandetails';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formCustomerData : Customerdetails = new Customerdetails();

  //list of customer variable 

  customerdetails : Customerdetails[]

  //list of loan ids
  loans: Loandetails[];



 
//AUTOMATIC REFRESH(DECLARATION)
private refreshListSource= new BehaviorSubject<boolean>(false);


constructor(private httpClient : HttpClient) { } //construction injection DI

  getAllCustomers():void{
    this.httpClient.get(environment.apiUrl + '/api/customers').toPromise().then(
      //success
      (response)=>{
        console.log(response);
        this.customerdetails = response as Customerdetails[]
      }
    );

  }
  //GET ALL LOan id

  //GET
  getAllLoans():void{
    this.httpClient.get(environment.apiUrl + '/api/loans').toPromise().then(
      //success
      (response)=>{
        console.log(response);
        this.loans = response as Loandetails[]
      }
    );

  }
  
  //POST
  insertCustomer(customerdetails:Customerdetails): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/customers',customerdetails);

  }

  
  //DEFINITION FOR REFRESH
  refreshList$=this.refreshListSource.asObservable();

  //TRIGGER
  triggerRefreshList(){
    this.refreshListSource.next(true);
  }

}
