import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';

// import images
import star from '../../assets/icons/icons8-star-50.png';
import imgReview1 from '../../assets/profile pics/review1.jpg';
import imgReview2 from '../../assets/profile pics/review2.jpg';
import imgReview3 from '../../assets/profile pics/review3.jpg';
import imgReview4 from '../../assets/profile pics/review4.jpg';

const reviews = [
  {
    name: 'Caline',
    image: imgReview1,
    review:
      'Corresponds exactly to the photo, and matches the ankle bracelet. They really make a great impact! I read in 1 comment that they were + heavy than it seemed. The weight of the BOs was not specified on the card. Very sincerely, I am very sensitive to all kinds of problems in the ears',
  },
  {
    name: 'Sandra',
    image: imgReview2,
    review: 'Beautiful, I recommend with eyes closed 🙏🏻',
  },
  {
    name: 'Emily',
    image: imgReview3,
    review:
      'The curls are very beautiful and received super fast. Only negative point, I find them very heavy, they pull the lobe and I can not wear them for long. I should have thought of asking for the weight! :)',
  },
  {
    name: 'Jennifer',
    image: imgReview4,
    review: 'Earrings simply fantastic! Exactly like in the picture.',
  },
];

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className='MuiTabs-indicatorSpan' />}}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: 'transparent',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({theme}) => ({
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
  marginRight: theme.spacing(1),
  color: '#000',
  '&.Mui-selected': {
    color: '#B48F57',
    borderBottom: '1px solid #B48F57',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#fff',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabsReview() {
  const numberOfStars = 5;
  const starsArray = Array(numberOfStars).fill(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label='styled tabs example'
        >
          <StyledTab label='Reviews for this item' />
          <StyledTab label='Reviews for this Shop' />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {reviews.map((review, id) => (
          <div key={id} className='flex flex-col gap-4'>
            <div className=' flex justify-start items-center gap-4'>
              <div className='h-10 w-10 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-1 outline outline-colorBlack '>
                <img src={review.image} alt='shop image' className='w-13' />
              </div>
              <p className=' font-secondary text-center text-xs text-colorBlack tracking-widest'>
                {review.name}
              </p>
            </div>
            <div className='flex gap-2'>
              {starsArray.map((_, index) => (
                <img key={index} width='15' height='15' src={star} alt='star' />
              ))}
            </div>
            <div className='mb-2'>
              <p className=' font-secondary text-left text-base text-colorBlack tracking-wide'>
                {review.review}
              </p>
            </div>
            <div className='w-full h-[1px] bg-colorBlack/20 mb-6'></div>
          </div>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        other reviews
      </CustomTabPanel>
    </Box>
  );
}
