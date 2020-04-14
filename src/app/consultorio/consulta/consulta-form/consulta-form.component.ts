import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/messages/notification.service';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html'
})
export class ConsultaFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  idRegistro: number;
  idPaciente: number;
  erros = null;
  pacienteid: number;
  formLabel: string;

  constructor(
    private fb: FormBuilder,
    private service: ConsultaService,        
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ns: NotificationService
  ) { }

  ngOnInit() {
    const consulta = this.route.snapshot.data['consulta'];

    this.formLabel = consulta.id == 0 ? 'Nova Consulta' : 'Edita Consulta'

    this.pacienteid = consulta.pacienteId;

    this.form = this.fb.group({
      id: [consulta.id],
      pacienteId: [consulta.pacienteId],
      conduta: [consulta.conduta, [Validators.required]],
      dtConsulta: [new Date(consulta.dtConsulta).toISOString().substring(0,10), [Validators.required]],
      retorno: [consulta.retorno, [Validators.required]],
      diagnostico: [consulta.diagnostico, [Validators.required]],
      exames: [consulta.exames, [Validators.required]],
      cid: [consulta.cid, [Validators.required]]
    });
  }
  
  onSubmit() {        
    this.submitted = true;    
    if (this.form.valid) {      
      let msgSuccess = 'Criado com sucesso';      
      this.idRegistro = this.form.value.id;
      this.idPaciente = this.form.value.pacienteId;
      if (this.idRegistro){
        msgSuccess = 'Alterado com sucesso';
      }
      this.service.save(this.form.value).subscribe(
        success => {
          this.ns.notify(msgSuccess)
          this.router.navigate(['/consultorio/paciente/detalhe', this.idPaciente]);          
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
  onCancel(id) {
    this.submitted = false;
    this.form.reset();
    this.location.back();
  }

}
