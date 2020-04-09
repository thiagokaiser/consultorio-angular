import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  erros = null;
  navigateTo: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  login(){
    this.submitted = true;
    console.log("login");
    this.loginService.login(this.form.value.email,
                            this.form.value.password)
                            .subscribe(success => {
                              console.log(success);                              
                            },
                            error => {
                              console.log(error);
                              this.erros = error.error.Message;          
                            },
                            ()=>{
                              this.router.navigate([this.navigateTo]);
                            });
  }

}
