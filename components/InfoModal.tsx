import React from 'react';
import { Modal } from 'react-native';
import { Constants } from 'expo';
import styled from 'styled-components/native';
import { InfoButton, InfoIcon } from './InfoButton';

const InfoBackground = styled.View`
  flex: 1;
  background: #ffb468;
  /* padding: 20px; */
  align-items: center;
`;

const Title = styled.Text`
  font-family: 'averia-serif-libre';
  font-size: 24px;
  text-align: center;
  margin-top: ${Constants.statusBarHeight + 50};
`;

const InfoContainer = styled.View`
  background-color: #fdfdfd;
  border: 2px black;
  border-radius: 5px;
  height: 60%;
  width: 80%;
  justify-content: center;
  padding: 12px;
`;

const InfoText = styled.Text`
  font-family: 'source-serif-pro';
`;

export const InfoModal: React.SFC<{
  state: { modalVisible: boolean };
  setModalVisible: (visible: boolean) => void;
}> = ({ state, setModalVisible }) => {
  return (
    <Modal transparent={false} visible={state.modalVisible}>
      <InfoBackground>
        <Title style={{ alignSelf: 'center' }}>Developmental Milestones App</Title>
        <InfoContainer>
          <InfoText />
        </InfoContainer>
      </InfoBackground>
      <InfoButton
        onPress={() => {
          setModalVisible(!state.modalVisible);
        }}>
        <InfoIcon>x</InfoIcon>
      </InfoButton>
    </Modal>
  );
};
