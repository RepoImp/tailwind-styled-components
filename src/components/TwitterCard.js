import React from 'react'
import tw from "tailwind-styled-components"
import twitter_icon from "../assests/twitter.svg"

const Card = tw.div`
   flex justify-center  h-screen items-center
`;

const CardContainer = tw.div`
   w-64 h-auto p-6 bg-white rounded-lg border border-border_color shadow-md flex-col justify-start items-start inline-flex font-inter
`;

const Avatar = tw.img`
w-10 h-10 rounded-full mb-3
`;

const UserName = tw.h2`
  text-lg font-semibold text-black_dark
`;

const TwitterHandle = tw.p`
   flex gap-2 text-sm text-gray_light
`;

const Follower = tw.p`
   font-normal text-base mt-5 text-gray_dark
`;

const FollowerCount = tw.span`
   font-medium text-black_light
`;

const TwitterCard = ({ avatar, userName, twitterHandle, followerCount }) => {
   return (
      <>
         <Card>
            <CardContainer>
               <Avatar src={avatar} alt={`${userName}'s avatar`} />
               <UserName>{userName}</UserName>
               <TwitterHandle><img src={twitter_icon} alt={`twitter`}></img>{twitterHandle}</TwitterHandle>
               <Follower><FollowerCount>{followerCount}</FollowerCount> Followers</Follower>
            </CardContainer>
         </Card>
      </>
   );
};

export default TwitterCard
