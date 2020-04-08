import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaListaComponent } from '../consulta-lista/consulta-lista.component';
import { observable } from 'rxjs';

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

  constructor(
    private fb: FormBuilder,
    private service: ConsultaService,        
    private route: ActivatedRoute,
    private router: Router,
    private consultaLista: ConsultaListaComponent
  ) { }

  ngOnInit() {
    const consulta = this.route.snapshot.data['consulta'];
    this.pacienteid = consulta.pacienteId;
    this.form = this.fb.group({
      id: [consulta.id],
      pacienteId: [consulta.pacienteId],
      conduta: [consulta.conduta],
      dtConsulta: [new Date(consulta.dtConsulta).toISOString().substring(0,10)],
      retorno: [consulta.retorno],
      diagnostico: [consulta.diagnostico],
      exames: [consulta.exames],
      cid: [consulta.cid]
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
      this.idPaciente = this.form.value.pacienteId;
      if (this.idRegistro){
        msgSuccess = 'Alterado com sucesso';
      }
      this.service.save(this.form.value).subscribe(
        success => {
          console.log('success');
          this.router.navigate(['/paciente/detalhe', this.idPaciente]);          
        },
        error => {
          console.log(error);
          this.erros = error.error.erros;          
        }
      );      
    }
    else{
      console.log('form invalid');
    }
  }
  onCancel(id) {
    this.submitted = false;
    this.form.reset();
    console.log('cancel');
    console.log(id);
    this.router.navigate(['/paciente/detalhe', id]);

  }

}
