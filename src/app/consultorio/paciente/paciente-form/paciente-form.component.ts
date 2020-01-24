import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteListaComponent } from '../paciente-lista/paciente-lista.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  idRegistro: number;
  erros = null;

  constructor(
    private fb: FormBuilder,
    private service: PacienteService,    
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private pacienteLista: PacienteListaComponent
  ) { }

  ngOnInit() {
    const paciente = this.route.snapshot.data['paciente'];
    
    this.form = this.fb.group({
      id: [paciente.id],
      nome: [paciente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      dtNascimento: [new Date(paciente.dtNascimento).toISOString().substring(0,10)],
      prontuario: [paciente.prontuario],
      convenio: [paciente.convenio],
      sexo: [paciente.sexo]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
  onSubmit() {    
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      let msgSuccess = 'Criado com sucesso';
      let msgError   = 'Erro ao atualizar';
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
            this.router.navigate(['/paciente/detalhe', this.idRegistro]);
          }
          else{
            this.router.navigate(['/paciente']);
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
      console.log('form invalid');
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('cancel');
    this.router.navigate(['/paciente']);

  }

}
