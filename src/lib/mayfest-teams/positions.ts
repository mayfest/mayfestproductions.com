interface IPositions {
  [key: string]: string;
}

interface ITeam {
  [key: string]: string;
}

export const executiveBoardPositions: IPositions = {
  cochair: 'Co-Chair',
  fianceDirector: 'Finance Director',
  promotionsDirector: 'Promotions Director',
  corporateRelationsDirector: 'Corporate Director',
  community: 'Community Director',
  programmingDirector: 'Programming Director',
  operationsDirector: 'Operations Director',
  productionDirector: 'Exuecutive Producer',
  bookingDirector: 'Booking Director',
  technologyDirector: 'Technology Director',
};

export const teamMemberPositions: IPositions = {
  generalMember: 'General Member',
  generalProducer: 'General Producer',
};

export const teamNames: ITeam = {
  coChairs: 'CO-Chairs & General Board',
  booking: 'Booking Committee',
  corporate: 'Corporate Committee',
  community: 'Community Committee',
  finance: 'Finance Committee',
  operations: 'Operations Committee',
  promotions: 'Promotions Committee',
  programming: 'Programming Committee',
  production: 'Production Committee',
  technology: 'Technology Committee',
};
