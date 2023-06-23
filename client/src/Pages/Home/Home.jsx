import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import ChatBot from "react-simple-chatbot";
import icon from "./icon.png"
import { ThemeProvider } from "styled-components";
const Home = ({ slideIn }) => {
  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    botAvatar: icon,
    floating: true,
  };
  const steps = [
    {
      id: "0",
      message: "Hello!",

      // This calls the next id
      // i.e. id 1 in this case
      trigger: "1",
    },
    {
      id: "1",

      // This message appears in
      // the bot chat bubble
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",

      // Here we want the user
      // to enter input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: 4,
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message:"Thank you for contacting us!",
      end:true
    },
  ];
  // const steps = [
  //   {
  //     id: '0',
  //     message: 'Welcome to StackOverflow!',
  //     trigger: '1',
  //   },
  //   {
  //     id:'1',
  //     user:true,
  //     trigger:'2'
  //   },
  //   {
  //     id:'2',
  //     message:"How can I help you? ",
  //     trigger:'3'
  //   },
  //   {
  //     id:'3',
  //     user:true,
  //     trigger:'4'
  //   },
  //   {
  //     id:"4",
  //     message:"Thank you for contacting us!",
  //     end:true
  //   }


  // ];
  return (
    <>
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
  
    </div>
    {/* <ThemeProvider theme={theme}> */}
        <ChatBot headerTitle="StackBot" steps={steps} {...config} />
      {/* </ThemeProvider> */}
    </>
  );
};

export default Home;
