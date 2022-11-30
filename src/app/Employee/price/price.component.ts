import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/shared/Payment/payment.service';
declare var Razorpay: any;
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  payForm = this.fb.group({
    amount: '',
  });
  constructor(private fb: FormBuilder, private service: PaymentService,private router:Router) {}

  ngOnInit(): void {}
  options: any;
  pay() {
    console.log(this.payForm.value.amount);
    if (this.payForm.value.amount == null || this.payForm.value.amount == '') {
      return;
    }
    this.service.createOrder(this.payForm.value).subscribe(
      (res) => {
        const data = JSON.parse(JSON.stringify(res));
        if (data.data.status == 'created') {
          this.options = {
            key: 'rzp_test_ADIhXKRv3rwihX',
            amount: this.payForm.value.amount,
            currency: 'INR',
            name: 'Safe Hiring',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            order_id: data.data.order_id,
            handler: function (response: any) {
              alert("Payment is successfully complete");
            },
            prefill: {
              name: 'Chintan Negi',
              email: 'chintan12negi@gmail.com',
              contact: '9811393219',
            },
            notes: {
              address: 'Razorpay Corporate Office',
            },
            theme: {
              color: '#3399cc',
            },
          };
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
          rzp1.on('payment.failed', function (response: any) {
            console.log("Payment is failed");
            
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
    return this.router.navigateByUrl("/")
  }
  homepage(){
   return this.router.navigateByUrl("/")
  }
}
