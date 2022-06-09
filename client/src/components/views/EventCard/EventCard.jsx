import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";

const Content = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 0;
  outline: 0;
  font-family: "Noto Sans KR";
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bolder;
  padding-left: 10px;
  margin-top: 5px;
`;
const Artist = styled.div`
  font-size: 13px;
  font-weight: bolder;
  padding-left: 10px;
  margin-top: 5px;
  color: gray;
`;
const User_and_posttime = styled.div`
  display: flex;
  flex_direction: row;
  margin-top: 5px;
  color: gray;
`;
const User = styled.div`
  font-size: 13px;
  font-weight: bolder;
  padding-left: 10px;
  margin-right: 170px;
`;
const Image_area = styled.img`
  height: 154px;
  width: 273px;
  margin: 5px;
`;

const EventCard = (props) => {
  const {
    title,
    genre,
    id,
    date,
    place,
    main_img,
  } = props;
  const onSubmit = () => {};
  const navigate = useNavigate();
  const onPostingClicked = () => {
    axios.get(`/api/post`).then((res) => {
      navigate(`/post/${id}`);
    });
  };

  return (
    <Content onClick={onPostingClicked}>
      <Image_area src={main_img}></Image_area>
      <Title>{title}</Title>
      <Artist>{place}</Artist>
      <User_and_posttime>
        <User>{genre}</User>
      </User_and_posttime>
    </Content>
  );
};

export default EventCard;
