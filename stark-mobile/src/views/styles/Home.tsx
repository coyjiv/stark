import React from 'react';
// @ts-ignore 
import styled from 'styled-components/native';



export const Card = styled.View`
  width: 80%;

  max-height: 500px;
  min-height: 350px;
  height: 45%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
  text-align: center;
  font-family: 'Righteous_400Regular';
  font-size: 60px;
`;

export const PreFormWrapper = styled.View`
    width: 80%;
    align-items: center;
    justify-content: flex-start;
`;

export const PreFormText = styled.Text`
    color: rgba(0, 0, 0, 0.8);
    margin-top: 15px;
    margin-bottom: 15px;
    width: 80%;
    text-align: center;
    font-family: 'Inter_400Regular';
    font-size: 15px;
    line-height: 20px;
`;

