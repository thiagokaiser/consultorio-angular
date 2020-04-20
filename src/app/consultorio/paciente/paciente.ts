export interface Paciente{
    id: number;
    nome: string;
    sobrenome: string;
    sexo: string;
    dtNascimento: Date;
    prontuario: string;
    convenio: string;    
}

export interface ListPaciente{
    count: number;
    consultas: Paciente[];
}