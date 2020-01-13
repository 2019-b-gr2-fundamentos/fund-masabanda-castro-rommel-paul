import {AnimalPerrito}from './animal-perrito.interface';

export interface Duenio{//interface ->(define una nueva estructura)
    nombre: string;
    apellido: string;
    cedula?: number;
    fechaDeNacimineto: number; // ? opcionales
    mascotasPerros?: AnimalPerrito[];
}