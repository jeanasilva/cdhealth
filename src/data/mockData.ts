// ==========================================
// Carla Dinamarães - Mock Data
// ==========================================

import type { Sala, Reserva, Paciente, Cliente, Fatura } from '@/types';

export const MOCK_SALAS: Sala[] = [
    {
        id: 1,
        nome: "Suíte 101",
        sub: "Psicologia",
        preco: 45,
        status: "Livre",
        tags: ["Divã", "Soft Light"],
        img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=800"
    },
    {
        id: 2,
        nome: "Cons. 102",
        sub: "Clínica Geral",
        preco: 60,
        status: "Livre",
        tags: ["Maca", "Pia Lab"],
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
    },
    {
        id: 3,
        nome: "Suíte 201",
        sub: "Estética",
        preco: 85,
        status: "Ocupada",
        tags: ["Laser", "Privativo"],
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800"
    },
    {
        id: 4,
        nome: "Cons. 202",
        sub: "Pediatria",
        preco: 55,
        status: "Livre",
        tags: ["Lúdico", "Ar-cond"],
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
    },
];

export const MOCK_RESERVAS_GLOBAL: Reserva[] = [
    {
        id: 101,
        doctor: "Dra. Maria Oliveira",
        room: "Suíte 101",
        date: "30/10/2024",
        time: "09:00",
        duration: "1h",
        status: "Confirmada",
        value: 45.00
    },
    {
        id: 102,
        doctor: "Dr. João Pedro",
        room: "Cons. 102",
        date: "30/10/2024",
        time: "10:30",
        duration: "1h",
        status: "Check-in",
        value: 60.00
    },
    {
        id: 103,
        doctor: "Dra. Fernanda Lima",
        room: "Suíte 201",
        date: "30/10/2024",
        time: "14:00",
        duration: "2h",
        status: "Reservada",
        value: 170.00
    },
    {
        id: 104,
        doctor: "Dra. Maria Oliveira",
        room: "Suíte 101",
        date: "31/10/2024",
        time: "08:00",
        duration: "1h",
        status: "Pendente",
        value: 45.00
    },
    {
        id: 105,
        doctor: "Dr. Carlos Mendes",
        room: "Cons. 202",
        date: "31/10/2024",
        time: "16:00",
        duration: "1h",
        status: "Confirmada",
        value: 55.00
    },
];

export const MOCK_PACIENTES: Paciente[] = [
    {
        id: 1,
        nome: "Ana Beatriz Silva",
        contato: "(11) 98888-7777",
        ultima: "Ontem",
        status: "Em tratamento",
        email: "ana@email.com",
        prontuario: "TC-001"
    },
    {
        id: 2,
        nome: "Ricardo Mendes",
        contato: "(11) 97777-6666",
        ultima: "12 Out",
        status: "Alta",
        email: "ricardo@email.com",
        prontuario: "TC-042"
    },
    {
        id: 3,
        nome: "Juliana Duarte",
        contato: "(11) 96666-5555",
        ultima: "05 Set",
        status: "Pendente",
        email: "ju@email.com",
        prontuario: "TC-089"
    },
    {
        id: 4,
        nome: "Carlos Eduardo",
        contato: "(11) 95555-4444",
        ultima: "Hoje",
        status: "Em tratamento",
        email: "cadu@email.com",
        prontuario: "TC-112"
    },
];

export const MOCK_CLIENTES: Cliente[] = [
    {
        id: 1,
        nome: "Dra. Maria Oliveira",
        email: "maria@saude.com",
        plano: "Pro Platinum",
        status: "Ativo",
        receita: 4250.00,
        unidade: "Itaim"
    },
    {
        id: 2,
        nome: "Dr. João Pedro",
        email: "joao@clinica.com",
        plano: "Silver",
        status: "Pendente",
        receita: 1200.00,
        unidade: "Jardins"
    },
    {
        id: 3,
        nome: "Dra. Fernanda Lima",
        email: "fer@derma.com",
        plano: "Gold",
        status: "Ativo",
        receita: 8900.00,
        unidade: "Batel"
    },
    {
        id: 4,
        nome: "Dr. Carlos Mendes",
        email: "carlos@psico.com",
        plano: "Silver",
        status: "Inadimplente",
        receita: 450.00,
        unidade: "Itaim"
    },
];

export const MOCK_FATURAS: Fatura[] = [
    {
        id: 'FAT-882',
        mes: 'Outubro',
        valor: 1250.50,
        status: 'Paga',
        vencimento: '05/10/2024',
        user: 'Dra. Maria Oliveira'
    },
    {
        id: 'FAT-883',
        mes: 'Novembro',
        valor: 890.00,
        status: 'Pendente',
        vencimento: '05/11/2024',
        user: 'Dra. Maria Oliveira'
    },
    {
        id: 'FAT-881',
        mes: 'Setembro',
        valor: 2100.00,
        status: 'Atrasada',
        vencimento: '05/09/2024',
        user: 'Dr. João Pedro'
    },
    {
        id: 'FAT-901',
        mes: 'Novembro',
        valor: 3400.00,
        status: 'Paga',
        vencimento: '01/11/2024',
        user: 'Dra. Fernanda Lima'
    },
];
