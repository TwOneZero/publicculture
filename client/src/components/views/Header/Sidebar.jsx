import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPost } from "../../../_actions/post_action";
import {
  SidebarContainer,
  SidebarMain,
  SidebarButtonContainer,
  LocationTitle,
  LocationList,
  LocationDiv,
  LocationItem,
} from "./SidebarElements";

const Sidebar = ({ onSidebarToggleButtonClicked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Location = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  const onLocationClicked = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    let name = e.target.name;
    dispatch(searchPost(name)).then((res) => {
      if (res.payload.success) {
        console.log(res);
        navigate(`showevent/${name}`, { state: { infos: res.payload } });
      }
    });
  };

  return (
    <SidebarContainer>
      <SidebarMain>
        <SidebarButtonContainer>
          <i
            className="fas fa-times"
            style={{
              cursor: "pointer",
              marginRight: "40px",
              marginTop: "10px",
            }}
            onClick={onSidebarToggleButtonClicked}
          ></i>
        </SidebarButtonContainer>
        <LocationTitle>지역별</LocationTitle>
        <div onClick={onSidebarToggleButtonClicked}>
          <LocationList>
            <LocationDiv>
              {Location.map((item, index) => (
                <div key={index}>
                  <LocationItem
                    onClick={onLocationClicked}
                    name={Location[index]}
                  >
                    {item}
                  </LocationItem>
                </div>
              ))}

              {/* <LocationItem onClick={onLocationClicked} name="강남구">
                강남구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="강동구">
                강동구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="강북구">
                강북구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="강서구">
                강서구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="관악구">
                관악구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="광진구">
                광진구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="구로구">
                구로구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="금천구">
                금천구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="노원구">
                노원구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="도봉구">
                도봉구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="동대문구">
                동대문구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="동작구">
                동작구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="마포구">
                마포구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="서대문구">
                서대문구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="서초구">
                서초구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="성동구">
                성동구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="성북구">
                성북구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="송파구">
                송파구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="양천구">
                양천구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="영등포구">
                영등포구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="용산구">
                용산구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="은평구">
                은평구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="종로구">
                종로구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="중구">
                중구
              </LocationItem>
            </LocationDiv>
            <LocationDiv>
              <LocationItem onClick={onLocationClicked} name="중랑구">
                중랑구
              </LocationItem> */}
            </LocationDiv>
          </LocationList>
        </div>
      </SidebarMain>
    </SidebarContainer>
  );
};

export default Sidebar;