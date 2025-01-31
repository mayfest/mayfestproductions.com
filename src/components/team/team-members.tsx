'use client';

import { Team } from '@/lib/mayfest-teams/teams';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

interface TeamMembersProps {
  team: Team;
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Executive Members */}
      <div className="flex flex-wrap gap-8">
        {team.members?.executive?.map((member, i) => (
          <div key={`${team.name} exec ${i}`} className="flex items-center gap-2">
            {member.image ? (
              <img
                src={member.image || ''}
                alt={`${member.name} photo`}
                className="w-12 h-12 rounded-full object-cover object-center"
              />
            ) : (
              <UserCircleIcon className="w-12 h-12 stroke-1 text-gray-200" />
            )}
            <div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs font-bold uppercase text-gray-500">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* General Members */}
      <div>
        <p className="text-xs font-bold uppercase text-gray-500">General Members</p>
        <p className="text-sm font-normal text-gray-400">
          {team.members?.general?.map((member, i) => (
            <Fragment key={`${team.name} general ${i}`}>
              <span className="text-white font-medium">{member.name}</span>
              {i !== team.members!.general!.length - 1 && ' • '}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
