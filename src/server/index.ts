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

export type ServerBusinessProfile = {
  name: string;
  phone: string;
  whatsappNumber: string;
};

export type ServerBusinessService = {
  duration: string;
  id: string;
  name: string;
  price: string;
  selectedProfessionals: string[];
};

export type ServerAppointmentItem = {
  date: string;
  hour: string;
  clientName: string;
  phone: string;
  service: string;
  appointmentId: string;
  additionalInfo: string;
};

export type ServerSchedule = {
  id: string;
  schedule: ServerAppointmentItem[];
};

export type ServerPhoneNumberTokens = {
  phoneNumberId: string;
  token: string;
};

export type ServerAppointmentSessionStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "COMPLETED";

export type ServerAppointmentSessionStep =
  | "date"
  | "service"
  | "professional"
  | "prehour"
  | "hour"
  | "name"
  | "confirmar";

export type ServerAppointmentSessionItem = {
  id: string;
  date: string;
  hour: string;
  phone: string;
  professionalId: string;
  profileId: string;
  service: string;
  sessionId: string;
  status: ServerAppointmentSessionStatus;
  step: ServerAppointmentSessionStep;
  timestamp: string;
};

export type ServerBusinessData = {
  id: string;
  numberOfAppointments: number;
  professionals: ServerProfessionalData[];
  profile: ServerBusinessProfile;
  services: ServerBusinessService[];
};
