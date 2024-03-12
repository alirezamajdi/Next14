import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import clsx from 'clsx';
import MobileNavItem from './navItem';
import PricingLink from './pricingLink';
import Avatar from '@/_components/UI/avatar';
import Typography from '@/_components/UI/typography';
import Link from '@/_components/UI/link';
import { useModalContext } from '@/_context/modal-context';
import {useAppDispatch , useAppSelector} from '@/_store/hooks'
import {selectProfile} from '@/_store/slices/profileSlice'

const MobileNavItems = ({
  collapsible,
  scroll,
}: {
  collapsible: boolean;
  scroll: boolean;
}) => {
  const modalCtx = useModalContext();
  const { width } = useWindowSize();
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch()

  let sulLinks = collapsible
    ? 'opacity-1 min-h-[420px] pb-4'
    : 'overflow-hidden h-0 p-0';

  const handleLogout = () => {
    modalCtx?.toggleModal('signOut');
  };

  const navList = [
    {
      title: 'add property',
      href: '/add-property',
      icon: 'apollon-key-square',
    },
    {
      title: 'dashboard',
      href: '/dashboard',
      icon: 'apollon-dashboard',
    },
    {
      title: 'Requests',
      href: '/sent-requests',
      icon: 'apollon-request',
    },
    {
      title: 'Find Property',
      href: '/search',
      icon: 'apollon-newHome',
    },
    {
      title: 'help center',
      href: '/help/categories',
      icon: 'apollon-about-us',
    },
    {
      title: 'News',
      href: '/news/categories',
      icon: 'apollon-news',
    },
  ];

  return (
    <>
      {width < 768 && (
        <>
          {/* {!collapsible && !scroll && (
             <span className={"border-b border-gray5 block"} />
          )} */}
          <div
            className={clsx(
              'absolute left-0 right-0 z-[1] rounded-b-[3rem] bg-white px-5 duration-300',
              sulLinks
            )}
          >
            {/* {profileCtx?.data && (
              <Link href='/profile' className='flex items-center pb-4'>
                <Avatar
                  src={profileCtx.data.avatar?.downloadUrl}
                  alt={profileCtx.data.email}
                  wrapperClassName='w-[7.5rem] h-[7.5rem] mr-4'
                />
                <div>
                  {profileCtx.data?.name && (
                    <Typography
                      variant='h4-card'
                      color='primary'
                      className='pb-1'
                    >
                      {profileCtx.data?.name}
                    </Typography>
                  )}
                  <div className='flex items-center'>
                    <img src='/img/email.svg' alt='email' className='h-4 w-4' />
                    <p className='pl-1 text-black'>{profileCtx?.data?.email}</p>
                  </div>
                </div>
              </Link>
            )}
            <span className={clsx('block border-b border-gray5')} />
            <ul>
              {navList.map((item, index) => (
                <MobileNavItem
                  key={index}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
              <PricingLink />
              {!profileCtx?.data ? (
                <>
                  <span className='my-2 block border-b border-gray5' />
                  <MobileNavItem
                    title='Sign In'
                    href='/signin'
                    icon='apollon-sign-in'
                  />
                  <MobileNavItem
                    title='Sign up'
                    href='/signup'
                    icon='apollon-sign-out'
                  />
                </>
              ) : (
                <MobileNavItem
                  title='sign out'
                  onClick={handleLogout}
                  icon='apollon-sign-out'
                />
              )}
            </ul> */}
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavItems;
