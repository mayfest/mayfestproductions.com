import { teams } from '@/lib/mayfest-teams/2024-2025-mayfest';
import { Play, SkipForward } from 'lucide-react';

// TODO: @cate - add additional teams to this component, feel free to edit css as needed
const TeamBadges = () => {
  return (
    <div className='bg-black/90 p-8 rounded-lg max-w-4xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
        {teams.map((team) => (
          <div key={team.name} className='relative'>
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full' />
            <div className='bg-white p-3 pt-4 rounded shadow-lg'>
              <div className='relative aspect-[4/5] mb-3 overflow-hidden rounded bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-300'>
                <div className='absolute inset-0 p-4'>
                  <div className='w-full h-1/4 border-b-2 border-gray-300 flex items-center justify-center'>
                    <div className='w-16 h-16 rounded-full bg-gray-300' />
                  </div>
                  <div className='w-full h-2/4 py-4 px-2'>
                    <div className='space-y-3'>
                      <div className='w-full h-2 bg-gray-300 rounded' />
                      <div className='w-3/4 h-2 bg-gray-300 rounded' />
                      <div className='w-5/6 h-2 bg-gray-300 rounded' />
                    </div>
                  </div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='w-full h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600'>
                      {team.members.length} Members
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-center text-black text-sm font-medium'>
                {team.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='space-y-3'>
        <div className='w-full bg-gray-700 h-1 rounded-full overflow-hidden'>
          <div className='w-1/3 h-full bg-white rounded-full' />
        </div>
        <div className='flex gap-4 items-center'>
          <button className='text-white hover:text-gray-300 transition-colors'>
            <Play className='w-5 h-5' />
          </button>
          <button className='text-white hover:text-gray-300 transition-colors'>
            <SkipForward className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamBadges;
