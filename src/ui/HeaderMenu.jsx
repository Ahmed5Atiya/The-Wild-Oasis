import styled from "styled-components";
import { HiOutlineUsers } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
const StyeldHeaderManu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyeldHeaderManu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUsers />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyeldHeaderManu>
  );
}

export default HeaderMenu;
