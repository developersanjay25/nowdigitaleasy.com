import { Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'

const faq=[
    {
        ques : 'What is a user?',
        ans : 'A user is defined as one email address or a mailbox (user@yourcompany). This is counted as one user with in your Google Workspace subscription. Based on the number of mailboxes you will be charged as per your plan'
    },
    {
        ques : 'What is a group?',
        ans : `A group email aliases such as
         sales@yourcompany and support@yourcompany are included in pricing and don't count as additional users.`
    },
    {
        ques : 'Why choose Now Digital Easy to buy Google Workspace?',
        ans : `As a Google trusted partner, we at now Digital Easy have experience in deploying over 2500 + Google Work Space subscriptions and counting. 
        Our certified Google Work Space administrators are the best and know the ins and outs of Google Workspace.`
    },
    {
        ques : 'How do I buy and pay?',
        ans : `We accept all credit cards via PayPal , wire transfers, and Western Union money transfer . 
        As per your convenience you can choose your payment method.`
    },
    {
        ques : 'Can I use my existing domain with Google Workspace ?',
        ans : `Yes, you can use your existing domain with Google Workspace & avail all Google Workspace features.`
    },
    {
        ques : 'What happens to my existing E-mail data when I move to Google Workspace ?',
        ans : `When switching to Google Workspace from another mail service, you and your users can bring your existing mail,
        contacts, and calendar data with you.You have a variety of options for migrating data into Google Workspace, 
        depending on the size of your organization and the system you're migrating from.
        Tools are available for migration. We shall analyze your need on this and assist you.`
    },
    {
        ques : 'Can I transfer my existing G Suite / Google Workspace from another service provider or direct Google to Now Digital Easy ?',
        ans : `Yes, You can transfer G Suite / Google Workspace from another service provider or direct Google to Now Digital Easy for better pricing and support.
        During the transfer, all your email accounts with data will be intact, as it is.
        Transfer happens instantly & there will be no downtime. 
        We can assist you in getting transfer token and moving the services to Now Digital Easy.`
    },
    {
        ques : `What is the space provided per Email Account ?`,
        ans : `30 GB Cloud Storage for every user on Google Workspace - Business Starter`
    },
    {
        ques : `Can I use few mail ids on Google Workspace and few mail ids on other services like cPanel/Plesk/BusinessMails ?`,
        ans : `Yes, you can. We can set-up a split delivery feature for this.
        This will substantially reduce your cost for mail services & you get a 
        choice of giving Google Workspace to actively using staff members and other mail service for rarely using staff members.`
    },
    {
        ques : `Is Google Workspace compatible with the email client I use today like Outlook / Thunderbird ?`,
        ans : `In addition to accessing Google Workspace mail from the Gmail web interface, you can send and receive mail from your favorite desktop client like Outlook / Thunderbird.
        Depending on the client, you can use either the IMAP or POP mail protocol.`
    },
    {
        ques : `Should I use POP or IMAP ?`,
        ans : `Prefer IMAP, if you are going to be accessing your email from multiple devices, such as a work computer and a smartphone.
        Prefer POP3, if you are only using one device.
        POP3 is better if you have a poor internet connection, very large number of emails and need to access your emails offline.`
    },
    {
        ques : `What's better POP or IMAP ?`,
        ans : `For most users, IMAP is a better choice than POP.
        POP is a very old way of receiving mail in an email client. It only lets you download your Inbox on your computer, and not any other folders.
        IMAP is the current standard for syncing your emails and lets you see all your folders on your email client.`
    },
    {
        ques : `Can we mix IMAP and pop3 ?`,
        ans : `If you're using multiple devices, you use IMAP across all devices.
        If it's a single device and mail is to be stored (not accessed via the server in the future) then POP3.
        Mixing these 2 is a huge no-no, while it may work well for a few months and maybe years — you'll eventually have problems.
        Mixing POP and IMAP can be very problematic and result in some quite bizarre behavior.
        IMAP is a far more robust solution for multiple devices accessing the same mailbox.`
    },
    {
        ques : `Which mobile phones can I access my mail from ?`,
        ans : `Your email can be accessed using any Smartphone or Tablet.
        The Gmail interface is compatible on all major Operating systems such as iOS, Android, Windows Mobile, Symbian and Blackberry.`
    },
    {
        ques : `What is your SPAM policy ?`,
        ans : `When you sign up for a Google Workspace account, you agree not to use the account to send spam, distribute viruses, or otherwise abuse the service.
        All users on your domain are subject to these agreements, which are part of the Google Workspace Acceptable Use Policy.
        If Google identifies a Google Workspace user who is violating these agreements then we reserve the right to immediately suspend the user.
        If the problem is domain-wide, we reserve the right to suspend the entire account and deny administrator access to all the Google Workspace services.
        In such cases, we send a notification to the registered secondary email address for the domain administrator.`
    },
   
]


function Faq() {
  return (
    <div style={{backgroundColor:'#1642C6',color:'white'}}>
        <Typography variant='h2' style={{textAlign:'center'}} padding={2}>Got questions? Well, we've got answers.</Typography>
        
        <Grid container spacing={3} padding={4} paddingTop={2} paddingBottom={2} width={'90%'} margin={'auto'}>
            {faq.map((item,ind) => {
                return (
                <Grid item md={6} sm={6} xs={12} key={`faq${ind}`}>
                <Typography variant='h3'>{ind+1}.) {item.ques}</Typography>
                <br />
                <Typography variant='body2'>{item.ans}</Typography>
                </Grid>)
            })}
        </Grid>
    </div>
  )
}

export default Faq