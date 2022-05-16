import { Divider, Stack, Typography, Paper, Box, Grid, CardActions } from '@mui/material'
import React from 'react'
import gimage from '../images/homepage/Daco_-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// This is Testimonials not connect with members
function ConnectwithMembers() {
    var data =[
    {
        content : 'Happy with their hosting service and support. Very adaptive to the needs of the client and fulfilling their requirements.',
        name : 'Sathish Arumugam',
        destination : ' I.T Head , 150dpi.net'
    },
    {
        content : `Now Digital Easy Google Workspace solution has been excellent so far. It's reliable, easy to use, and the technical support has been great. I spend more than half of my time off site, 
        and Google Workspace keeps me in touch with its shared calendar and access to contacts and customer phone numbers. I'd recommend Now Digital Easy to anyone`,
        name : 'Ashokkumar',
        destination : 'Managing Director , Oasis Groups'
    },
    {
        content : `Our website was hosted by a single person and found our site down for an entire week, inclusive of our emails.
         A friend recommended Now Digital Easy and after speaking to them one time, I knew these were the professionals that could help. 
        Within a few hours our email was up and running, I put off fixing the website as I did not have any time to commit. 
        When I circled back to Now Digital Easy they told me I was already signed up to their website service and that even a newbie could have it up and
         going in a couple of hours. Every step of the way their support/customer service has been excellent. 
        Wish all the companies we deal with were the same way. We now can easily handle our own email and edit our website any time of the day. 
        Thanks Now Digital Easy for making the lives of our small business a lot easier!
        `,
        name : 'Prawin',
        destination : 'IGlite , managink Partner'
    },
    {
        content : `We are a large business user of now digital easy dedicated server network. now digital easy service and response time has always been excellent, 
        even in a 24 x 7 environment. 
        now digital easy is always willing to jointly develop solutions that suits our needs. I would recommend nowdigitaleasy without hesitation.`,
        name : 'M.K.Gandhi ',
        destination : ' IT Head , NIFT'
    },
    {
        content : `We have a great business relationship with Now Digital Easy. We had worked with several other marketing companies in the past who didn't deliver results and 
        I'm happy to say Now Digital Easy is doing that for us. They help bring our vision to life in a way that makes sense
        `,
        name : 'Antony',
        destination : 'Capstone Holidays , HOLIDAY PLANER'
    }
    ]



  return (
      <Box  className='connectwithmember'>
        <Stack justifyContent='center' alignItems='center' spacing={2}>
        <Typography variant='h2'>TESTIMONIALS</Typography>

        <Divider variant="middle" flexItem style={{backgroundColor:'white'}}/>

        {/* <Typography>natus error sit voluptatem accusantium dolorem quelaudantium sdadad sda</Typography> */}
        </Stack>
        <br />

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
    >
     {data.map((item,index) => {
        return <SwiperSlide key={`testimonials${index}`}>
            <Cards name={item.name} destination={item.destination} content={item.content}/>
            </SwiperSlide>
    })}
    </Swiper>
    
     </Box>
  )
}


function Cards(props){
    const {name, destination, content} = props;

    return <Box component={Paper} className='connectwithmember-card' maxWidth={300} >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24">
    <path id="Icon_open-double-quote-serif-left" data-name="Icon open-double-quote-serif-left" d="M11.25,0C5.062,0,0,5.4,0,12V24H11.25V12H3.75a7.735,7.735,0,0,1,7.5-8ZM30,0C23.813,0,18.75,5.4,18.75,12V24H30V12H22.5A7.735,7.735,0,0,1,30,4Z" fill="#a5a1a1"/>
    </svg>

    <br />
    <Typography variant='body2' height={100}>{content}</Typography>

    <br />
    <br />

    <Stack direction='row' spacing={2} alignItems='center'>
        <img src={gimage} height='50px' width='50px' style={{borderRadius:'50%',objectFit:'cover'}}/>
        
        <div>
        <Typography variant='h3' color='primary'>{name}</Typography>
        <Typography variant='h4' >{destination}</Typography>
        </div>
    </Stack>
    </Box>
}

export default ConnectwithMembers