import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteListaComponent } from '../paciente-lista/paciente-lista.component';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html'
})
export class PacienteFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  idRegistro: number;
  erros = null;

  constructor(
    private fb: FormBuilder,
    private service: PacienteService,        
    private route: ActivatedRoute,
    private router: Router,
    private pacienteLista: PacienteListaComponent
  ) { }

  ngOnInit() {
    const paciente = this.route.snapshot.data['paciente'];
    
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
          console.log('save');
          //this.modal.showAlertSuccess(msgSuccess);
          if(this.idRegistro){
            this.router.navigate(['/consultorio/paciente/detalhe', this.idRegistro]);
          }
          else{
            this.router.navigate(['/consultorio/paciente']);
          }          
          //this.location.back();
          this.pacienteLista.carregaPacientes();
        },
        error => {
          this.erros = error.error.erros;          
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
    this.router.navigate(['/consultorio/paciente']);

  }

}
