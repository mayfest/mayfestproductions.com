'use client';

import { Team } from '@/lib/mayfest-teams/teams';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TeamMembers from './team-members';

interface TeamInfoProps {
  team: Team;
  onClose: () => void;
}

export function TeamInfo({ team, onClose }: TeamInfoProps) {
  return (
    <div className="w-full grid-cols-1 bg-[#1a1a1a] border-2 border-white rounded-xl overflow-hidden relative flex gap-2 sm:flex-col">
      {/* Team Image */}
      <img
        src={team.teamImage || ''}
        alt={`${team.name} team image`}
        className="w-[320px] object-cover object-center sm:w-full sm:h-[240px]"
      />

      {/* Team Info Content */}
      <div className="p-4 flex flex-col">
        <h3 className="text-2xl font-bold text-purple-300 my-5">{team.name}</h3>
        <div className="flex flex-col gap-2 my-5">{team.description}</div>
        <TeamMembers team={team} />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white p-2 rounded-md hover:bg-[#323232] active:bg-[#484848]"
      >
        <XMarkIcon className="w-8 h-8 stroke-2" />
      </button>
    </div>
  );
}

export default TeamInfo;


// // components/TeamInfo.tsx
// import { Team } from '@/lib/mayfest-teams/teams';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import styled from 'styled-components';
// import { mobile } from '.';
// import TeamMembers from './team-members';

// const Container = styled.div`
//   width: 100%;
//   grid-column: 1 / -1;
//   background-color: #1a1a1a;
//   border: 2px solid #ffffff;
//   margin: 0;
//   border-radius: 16px;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   position: relative;
//   gap: 8px;

//   ${mobile} {
//     flex-direction: column;
//   }
// `;

// const Image = styled.img`
//   width: 320px;
//   object-fit: cover;
//   object-position: center;

//   ${mobile} {
//     width: 100%;
//     height: 240px;
//   }
// `;

// const Contents = styled.div`
//   padding: 16px;
// `;

// // Close the info box
// const CloseButton = styled.button`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   background: none;
//   border: none;
//   color: #ffffff;
//   border: none;
//   cursor: pointer;
//   border-radius: 8px;

//   &:hover {
//     background-color: #323232;
//   }

//   &:active {
//     background-color: #484848;
//   }

//   svg {
//     width: 32px;
//     height: 32px;
//     stroke-width: 2px;
//   }
// `;

// const Text = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin: 20px 0;
// `;

// const Title = styled.h3`
//   font-size: 24px;
//   font-weight: 700;
//   color: #d8b4fe;
//   margin: 20px 0;
// `;

// interface TeamInfoProps {
//   team: Team;
//   onClose: () => void;
// }

// export function TeamInfo({ team, onClose }: TeamInfoProps) {
//   return (
//     <Container>
//       <Image src={team.teamImage || ''} alt={`${team.name} team image`} />
//       <Contents>
//         <Title>{team.name}</Title>
//         <Text>{team.description}</Text>
//         <TeamMembers team={team} />
//       </Contents>
//       <CloseButton onClick={() => onClose()}>
//         <XMarkIcon />
//       </CloseButton>
//     </Container>
//   );
// }

// export default TeamInfo;