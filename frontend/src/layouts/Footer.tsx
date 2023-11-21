import * as React from 'react';
import logoFooter from '../assets/logolight.svg';

import {Link} from 'react-router-dom';
import {FiInstagram, FiTwitter} from 'react-icons/fi';
import {GiEarthAmerica} from 'react-icons/gi';
import {PiPinterestLogoBold} from 'react-icons/pi';
import {LuFacebook} from 'react-icons/lu';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function Footer(): React.ReactElement {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <footer className='font-secondary border-t-4 border-t-colorGold bg-colorBeige'>
        {/* Footer-part-one */}
        <section className='xl:w-5/6 mx-auto'>
          <div className='w-full flex flex-col md:flex-row'>
            <div className='flex mt-7 flex-col mb-8 gap-3 justify-center items-center'>
              <img src={logoFooter} alt="Description de l'image" />
              <div className='flex gap-2'>
                <div className='h-7 w-7 border border-colorBrown rounded-full flex justify-center items-center'>
                  <Link to=''>
                    <LuFacebook />
                  </Link>
                </div>
                <div className='h-7 w-7 border border-colorBrown rounded-full flex justify-center items-center'>
                  <Link to=''>
                    <FiInstagram />
                  </Link>
                </div>
                <div className='h-7 w-7 border border-colorBrown rounded-full flex justify-center items-center'>
                  <Link to=''>
                    <PiPinterestLogoBold />
                  </Link>
                </div>
                <div className='h-7 w-7 border border-colorBrown rounded-full flex justify-center items-center'>
                  <Link to=''>
                    <FiTwitter />
                  </Link>
                </div>
              </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2'>
              <div className='ms-24'>
                <h4 className='font-bold sm:mt-6'>Shop</h4>
                <ul className='mt-2 mb-7'>
                  <li>
                    <Link to=''>Gift cards</Link>
                  </li>
                  <li>
                    <Link to=''>Sales</Link>
                  </li>
                  <li>
                    <Link to=''>Sitemap</Link>
                  </li>
                  <li>
                    <Link to=''>Souks Arts Blog</Link>
                  </li>
                </ul>
              </div>

              <div className='ms-24'>
                <h4 className='font-bold sm:mt-6'>Sell</h4>
                <ul className='mt-2 mb-7'>
                  <li>
                    <Link to=''>Sell on Souks Arts</Link>
                  </li>
                  <li>
                    <Link to=''>Forum</Link>
                  </li>
                  <li>
                    <Link to=''>Affiliates & Creators</Link>
                  </li>
                </ul>
              </div>

              <div className='ms-24'>
                <h4 className='font-bold sm:mt-6'>About</h4>
                <ul className='mt-2 mb-7'>
                  <li>
                    <Link to=''>SoukArts</Link>
                  </li>
                  <li>
                    <Link to=''>Policies</Link>
                  </li>
                  <li>
                    <Link to=''>Carrers</Link>
                  </li>
                </ul>
              </div>

              <div className='ms-24'>
                <h4 className='font-bold sm:mt-6'>Help</h4>
                <ul className='mt-2 mb-7'>
                  <li>
                    <Link to=''>Help Center</Link>
                  </li>
                  <li>
                    <Link to=''>Privacy settings</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer-part-two */}
        <section className='text-colorBeigeLight bg-colorBrown'>
          <div className='flex flex-col md:flex-row md:justify-around items-center text-center pt-4 md:pt-0 pb-6 md:pb-4'>
            <div className='mx-auto md:mx-0'>
              <button className='flex items-center justify-center mt-5'>
                <GiEarthAmerica /> Morocco | English(U$) | DH(MAD)
              </button>
            </div>

            <div className='flex flex-col items-center mt-5 md:flex-row md:gap-10'>
              <span>©2023 SoukArts,Inc.</span>

              <span className='underline text-[12px] md:text-small font-extralight mt-3 md:mt-0'>
                <Link to='/Termsofuse'>Terms of use</Link>
              </span>

              <span className='underline text-[12px] md:text-small font-extralight'>
                <Link to='privacy'>Privacy</Link>
              </span>

              <span className='underline '>
                <React.Fragment>
                  <span
                    className='text-colorBeigeLight !outline-none !underline !font-secondary !font-extralight !text-[12px] md:!text-small'
                    onClick={() => setOpen(true)}
                  >
                    Regions
                  </span>
                  <Modal
                    aria-labelledby='modal-title'
                    aria-describedby='modal-desc'
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Sheet
                      variant='outlined'
                      sx={{
                        maxWidth: 1000,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                      }}
                    >
                      <ModalClose variant='plain' sx={{m: 1}} />
                      <Typography className='!text-colorBrown !text-heading !font-primary !text-center'>
                        Regions
                      </Typography>
                      <Typography id='modal-desc' textColor='text.tertiary'>
                        <div className='grid grid-cols-3 gap-6 md:gap-32 text-medium font-secondary md:px-14 pt-7'>
                          <div>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Morocco
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Bahreïn
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Oman
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Qatar
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Koweit
                            </span>
                          </div>

                          <div>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Germany
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Belgium
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              France
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Italy
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Spain
                            </span>
                          </div>

                          <div>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Japan
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              China
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Singapour
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              USA
                            </span>
                            <span className='border-b-[1px] border-b-colorGold pb-4 mb-4 md:pb-7 md:mb-7 '>
                              Canada
                            </span>
                          </div>
                        </div>
                      </Typography>
                    </Sheet>
                  </Modal>
                </React.Fragment>
              </span>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
