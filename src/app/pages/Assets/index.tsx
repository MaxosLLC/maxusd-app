import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
const AssetsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
`

const AssetsBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 40px 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 20px;
  }
`
export function Assets() {
    return(
        <>
            <Header/>
            <AssetsContainer>
                <AssetsBody>

                </AssetsBody>
            </AssetsContainer>
        </>
    );
}