export type ServerTimeSlot = {
    start: string | number;
    end: string | number;
};
export type ServerWorkingSlot = ServerTimeSlot & {
    active: boolean;
};
export type ServerRestDay = ServerTimeSlot & {
    date: string;
};
export type ServerProfessionalData = {
    restDays: ServerRestDay[];
    restHours: ServerWorkingSlot[];
    phone: string;
    name: string;
    id: string;
    workingHours: ServerWorkingSlot[];
    email: string;
};
export type ServerBusinessData = {
    id: string;
    numberOfAppointments: number;
    professionalData: ServerProfessionalData[];
};
