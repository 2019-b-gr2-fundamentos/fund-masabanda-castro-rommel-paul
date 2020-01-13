import {Duenio} from './duenio.interface'
export interface AnimalPerrito{//interface ->(define una nueva estructura)

    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // ? opcionales
    //hijos: null,
    perritas?: string[]; // opcional
    vacunado?: boolean; // opcional
    duenio?: Duenio
}