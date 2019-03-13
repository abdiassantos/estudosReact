import { URL_API } from "./base";

export function consultarResumo(){
    return fetch(`${URL_API}/resumo`).then(resultado => resultado.json());
}

export function consultarFaturamento(){
    return fetch(`${URL_API}/faturamento`).then(resultado => resultado.json());
}

export function consultarConsultas(){
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}