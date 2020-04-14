import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html'
})
export class PacienteFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  idRegistro: number;
  erros = null;
  formLabel: string;

  constructor(
    private fb: FormBuilder,
    private service: PacienteService,        
    private route: ActivatedRoute,
    private router: Router,
    private ns: NotificationService,
    private location: Location
  ) { }

  ngOnInit() {
    const paciente = this.route.snapshot.data['paciente'];
    this.formLabel = paciente.id == 0 ? 'Novo' : 'Edita'
    
    this.form = this.fb.group({
      id: [paciente.id],
      nome: [paciente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      dtNascimento: [new Date(paciente.dtNascimento).toISOString().substring(0,10), [Validators.required]],
      prontuario: [paciente.prontuario, [Validators.required]],
      convenio: [paciente.convenio, [Validators.required]],
      sexo: [paciente.sexo, [Validators.required]]
    });
  }

  onSubmit() {    
    this.submitted = true;
    console.log(this.form.value);    
    if (this.form.valid) {
      console.log('submit');
      let msgSuccess = 'Criado com sucesso';      
      this.idRegistro = this.form.value.id;
      if (this.idRegistro){
        msgSuccess = 'Alterado com sucesso';
      }
      console.log(this.form);
      this.service.save(this.form.value).subscribe(
        success => {
          this.ns.notify(msgSuccess)          
          if(this.idRegistro){
            this.router.navigate(['/consultorio/paciente/detalhe', this.idRegistro]);
          }
          else{
            this.router.navigate(['/consultorio/paciente']);
          }                              
        },
        error => {
          this.erros = error.error.erros;
          throw error          
        }
      );      
    }
    else{
      this.form.markAllAsTouched();      
    }
  }
  onCancel() {    
    this.submitted = false;
    this.form.reset();        
    this.location.back();

  }

}
