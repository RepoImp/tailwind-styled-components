import profile_img from "./assests/profile.png"
import TwitterCard from './components/TwitterCard';

function App() {
  return (
    <>
      <TwitterCard
        avatar={profile_img}
        userName="Johnny's Cash"
        twitterHandle="@degenjohndoe"
        followerCount={545}
      />
    </>
  );
}

export default App;
