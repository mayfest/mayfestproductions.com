import {
  executiveBoardPositions,
  teamMemberPositions,
  teamNames,
} from '@/lib/mayfest-teams/positions';
import { Team } from '@/types/teams/teams';

// TODO: @cate - add additional teams to this array and follow the format of the existing team
export const teams: Team[] = [
  {
    name: teamNames.technology,
    description:
      'Mayfest Technology Team. Responsible for the development and maintenance of the Mayfest website and mobile applications.',
    members: [
      {
        name: 'Ethan Pineda',
        role: executiveBoardPositions.technologyDirector,
        email: 'ethanpineda2025@u.northwestern.edu',
      },
      {
        name: 'Cate Rose',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'David Fu',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Vivian Chen',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Eduardo Ramos',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Sofia Melendez',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Jenna Kazim',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Natalie Volanto',
        role: teamMemberPositions.generalMember,
        email: '',
      },
      {
        name: 'Leo Garcia',
        role: teamMemberPositions.generalMember,
        email: '',
      },
    ],
  },
];
