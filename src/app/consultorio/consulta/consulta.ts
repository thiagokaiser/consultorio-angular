export interface Consulta{
    id: number,
    pacienteId: number,
    conduta: string,
    diagnostico: string,
    cid: string, 
    dtConsulta: Date,
    exames: string, 
    retorno: Date
}

export interface ListConsulta{
    count: number;
    consultas: Consulta[];
}