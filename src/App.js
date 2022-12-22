import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CityWeather from "./components/CityWeather";

import Backround from "./images/bg.jpg";
import styled from "styled-components";

function App() {
  const key = "177c4e0a6b1f0b811e94ff85abbe92c8";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("london");
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getApi() {
      loading();
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        );
        loading();

        console.log(response.data);
        setWeather(response.data);
        console.log(response.data.main.temp);
      } catch (error) {
        console.log(error.response.data);
        console.error(error);
      }
    }
    getApi();
  }, [city]);
  const clickSubmit = () => {
    console.log("Submit clicked");
    if (search.length > 0) {
      setCity(search);
    }
    console.log(city);
  };

  function loading() {
    setIsLoading((isLoading) => !isLoading);
  }
  return (
    <Container>
      <Search>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search city"
        />
        <Submit type="button" onClick={clickSubmit}>
          Submit
        </Submit>
      </Search>
      <Loading>
        {isLoading ? <Img src="/images/loading.gif" alt="loading" /> : ""}
      </Loading>
      <Info>{weather && <CityWeather weather={weather} />}</Info>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  background-size: cover;
  background-image: url(${Backround});
`;

const Search = styled.div`
  padding-top: 50px;
  position: center;
`;

const Input = styled.input`
  box-shadow: 5px 10px #888888;
  border: 0;
  height: 30px;
  border-radius: 10px;
  padding-left: 15px;
  position: block;
`;
const Submit = styled.button`
  border-radius: 5px;
  width: 60px;
  height: 23px;
  background: #ea0707;
  margin-left: 10px;

  &:hover {
    background: #ff1400;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Loading = styled.div`
  height: 80px;
  width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Info = styled.div`
  width: 600px;
  height: 200px;
  background: rgba(255,255,255,0.4);
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
