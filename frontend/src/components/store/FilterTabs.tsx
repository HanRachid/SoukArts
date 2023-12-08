import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import {Pagination} from '@mui/material';

import SelectOptions from '../categoryproducts/Select';
import StoreCard from './StoreCard';

import lens from '../../assets/navbar/lens.svg';
import shoe1 from '../../assets/SHOES/Shoe1.webp';
import shoe2 from '../../assets/SHOES/Shoe2.webp';
import shoe3 from '../../assets/SHOES/Shoe3.webp';
import shoe4 from '../../assets/SHOES/Shoe4.webp';
import shoe5 from '../../assets/SHOES/Shoe5.webp';
import shoe6 from '../../assets/SHOES/Shoe6.webp';
import bag1 from '../../assets/SHOES/Bag1.jpg';
import bag2 from '../../assets/SHOES/Bag2.webp';
import bag3 from '../../assets/SHOES/bag3.jpg';
import shoe7 from '../../assets/SHOES/shoe7.webp';

const shoes = [shoe1, shoe2, shoe3, shoe4, shoe5];

const products = [shoe6, bag1, bag2, bag3, shoe7];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className='w-full h-fit'
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3, borderLeft: 1, borderColor: 'divider'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    orientation='vertical'
    {...props}
    TabIndicatorProps={{children: <span className='MuiTabs-indicatorSpan' />}}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'none', // Hide the indicator for vertical tabs
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: 'transparent',
  },
});

interface StyledTabProps {
  label: string;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({theme}) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: [
      'ABeeZee',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: theme.typography.pxToRem(15),
    marginBottom: theme.spacing(1), // Adjust spacing between tabs
    color: '#000',
    '&.Mui-selected': {
      color: '#B48F57',
      borderBottom: '2px solid #B48F57',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#fff',
    },
  })
);

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        display: 'flex',
        height: 'full',
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{
          height: '100%',
          width: '18%',
        }}
      >
        <StyledTab
          label={<div className='flex gap-32 text-lg'>All 120</div>}
          {...a11yProps(0)}
        />
        <StyledTab
          label={<div className='flex gap-32 text-lg'>On Sale 100</div>}
          {...a11yProps(1)}
        />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <div className='flex justify-end mb-11'>
          <div className='relative'>
            <input
              type='search'
              placeholder=''
              className='relative pl-10 w-72 pr-4 py-2  border rounded-full bg-colorBeigeLight outline-none placeholder:text-colorBlack'
            />

            <img
              src={lens}
              alt='search icon'
              className='w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 ml-2'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-primary text-extraLarge tracking-widest text-colorBlack'>
            FEATURED PRODUCTS
          </h2>
          <SelectOptions
            selections={['Most Recent', 'Lowest Price', 'Highest Price']}
          />
        </div>
        <div className='flex items-center gap-4 mt-4'>
          {shoes.map((shoe, id) => (
            <StoreCard image={shoe} isNew={false} key={id} />
          ))}
        </div>
        <div className='flex flex-col justify-start gap-4 mt-14'>
          <h2 className='font-primary text-extraLarge tracking-widest text-colorBlack'>
            All Items
          </h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>{' '}
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>{' '}
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>{' '}
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>{' '}
            <div className='flex items-center gap-4 '>
              {products.map((product, id) => (
                <StoreCard image={product} isNew={false} key={id} />
              ))}
            </div>
            <div className='mt-9 flex justify-center'>
              <Pagination count={10} variant='outlined' shape='rounded' />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        On Sale
      </TabPanel>
    </Box>
  );
}
