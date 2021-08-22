import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: 100%;
  margin-bottom: 30px;
  width:100%;
  border-radius: 15px;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : "white"};

  
  &:hover,
  &:focus,
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    height: 100%;
    width:100%;
    margin-bottom: 30px;
    border-radius: 15px;
    background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : "white"};
  }
`;

const CustomCard = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default CustomCard;
