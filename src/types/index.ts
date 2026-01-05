// ==========================================
// Carla Dinamarães - Type Definitions
// ==========================================

export interface User {
    nome: string;
    email: string;
    cargo: string;
    plano: string;
}

export interface Sala {
    id: number;
    nome: string;
    sub: string;
    preco: number;
    status: 'Livre' | 'Ocupada';
    tags: string[];
    img: string;
}

export interface Reserva {
    id: number;
    doctor: string;
    room: string;
    date: string;
    time: string;
    duration: string;
    status: 'Confirmada' | 'Check-in' | 'Reservada' | 'Pendente';
    value: number;
}

export interface Paciente {
    id: number;
    nome: string;
    contato: string;
    ultima: string;
    status: 'Em tratamento' | 'Alta' | 'Pendente';
    email: string;
    prontuario: string;
}

export interface Cliente {
    id: number;
    nome: string;
    email: string;
    plano: string;
    status: 'Ativo' | 'Pendente' | 'Inadimplente';
    receita: number;
    unidade: string;
}

export interface Fatura {
    id: string;
    mes: string;
    valor: number;
    status: 'Paga' | 'Pendente' | 'Atrasada';
    vencimento: string;
    user: string;
}

export type ThemeMode = 'dark' | 'light';

export type ModalType =
    | 'paciente'
    | 'reserva'
    | 'reserva_admin'
    | 'pagamento'
    | null;

export type PageType =
    | 'landing'
    | 'login'
    | 'app'
    | 'app/reservar'
    | 'app/pacientes'
    | 'app/financeiro'
    | 'app/admin'
    | 'app/admin/reservas'
    | 'app/admin/clientes'
    | 'app/admin/financeiro'
    | 'app/admin/ocupacao';

export type BadgeColor =
    | 'emerald'
    | 'purple'
    | 'blue'
    | 'amber'
    | 'red'
    | 'slate';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';
