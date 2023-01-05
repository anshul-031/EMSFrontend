import { Component, HostListener } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { UserService } from '../../_services/user.service';
import { UserAuthService } from '../../_services/user-auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var Razorpay: any;

@Component({
  selector: 'app-razor-pay',
  templateUrl: './razor-pay.component.html',
  styleUrls: ['./razor-pay.component.css']
})
export class RazorPayComponent {

  constructor(public userService: UserService, private paymentService: PaymentService, private userAuthService: UserAuthService, private router: Router,) { }


  payNow() {
    const orderData =  {
      "customerName": "Ovesh Parasara",
      "employerOrgName": "Your Employee check",
      "email": this.userAuthService.getUserName(),
      "phoneNumber": 9911449662,
      "amount": 1000
    }

    this.paymentService.createOrder(orderData).subscribe(
      (response: any) => {
          console.info(response)
          this.openCheckout(response.applicationFee, response.secretKey, response.razorpayOrderId, "sample description");
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: error.error,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
    );
  }

  openCheckout(amount: number, secretKey: string, razorpayOrderId : string, description: string) {
    const options = {
      "key": secretKey, // Enter the Key ID generated from the Dashboard
      "amount": amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "YourEmployeeCheck",
      "description": description,
      "image": "/assets/YourEmployeeCheckLogo.jpg",
      "order_id": razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler":  (response: any) => {
        console.log("response = ", response)
         this.verifyPayment(response)
    },

      "notes": {
          "description": description,
          "company_name": "[['YourEmployeeCheck']]",
      },
      "theme": {
          "color": "#004A55"
      }
  };
  console.log("options ", options)
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed',(response : any) => {
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
  });
  rzp1.open();
  }

  verifyPayment(razorpayResponse: any) {
      const paymentResponse = {
        "razorpayOrderId": razorpayResponse.razorpay_order_id,
        "razorpayPaymentId": razorpayResponse.razorpay_payment_id,
        "razorpaySignature": razorpayResponse.razorpay_signature,
    }

    this.paymentService.verifyPayment(paymentResponse).subscribe(
      (response: any) => {
          console.info("payment verified", response);
          Swal.fire({
            title: 'Success!',
            text: 'Your payment success and login again to continue',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
               this.logout();
            }
          })
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: JSON.stringify(error.error),
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
       console.info("payment successs")
  }

  logout(): void {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    setTimeout(() =>{
      window.location.reload();
    },300)
    
  }

}
