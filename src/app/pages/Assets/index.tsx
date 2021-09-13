import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Card } from 'react-bootstrap';
const AssetsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #121318;
`
const AssetsList = styled.div`
  flex: 1;
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
const TableContainer = styled.div`
	padding: 20px;
	margin-bottom: 10px;
	width: 100%;
	background: #14151A;
	border-radius: 8px;
`
export const TableHeader = styled.div`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #B7BECB;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    color: #B7BECB;
    font-size: 16px;
    height: unset;
    background-color: #14151A;
  }

  &>div {
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &>div:last-child {
    margin-right: 0;
  }
`

export const TableBody = styled.div`
  width: 100%;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */
  text-align: right;

  /* Semiwhite */
  color: #EFF3FB;
  background-color: #14151A;
  border-radius: 8px;
  display: flex;
  height: 60px;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: unset;
    margin-top: 5px;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &>div {
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &>div:last-child {
    margin-right: 0;
  }
`
export function Assets() {
    return(
        <>
            <Header/>
            <AssetsContainer>
                <AssetsBody>
                    <AssetsList>
                        <Card>
                            <Card.Body style={{ backgroundColor: '#1D1D25' }}>
                                <TableHeader>
                                    <div style={{ width: '5%', textAlign: 'center' }}>#</div>
                                    <div style={{ width: '20%', textAlign: 'left' }}>Strategies</div>
                                    <div style={{ width: '10%', textAlign: 'left' }}>Chain</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>Amount</div>
                                    <div style={{ width: '10%', textAlign: 'right' }}>% of Assets</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>Recent APY</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>Risk Assessment</div>
                                    <div style={{ width: '15%', textAlign: 'center' }}>Insurance</div>
                                </TableHeader>
                                <TableBody key={1}>
                                    <div style={{ width: '5%', textAlign: 'center' }}>1</div>
                                    <div style={{ width: '20%', textAlign: 'left' }}>Treasury</div>
                                    <div style={{ width: '10%', textAlign: 'left' }}>ETH</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>$20,000</div>
                                    <div style={{ width: '10%', textAlign: 'right' }}>1.0%</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>0%</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>0%</div>
                                    <div style={{ width: '15%', textAlign: 'center' }}>$0</div>
                                </TableBody>
                                <TableBody key={1}>
                                    <div style={{ width: '5%', textAlign: 'center' }}></div>
                                    <div style={{ width: '20%', textAlign: 'left' }}>Totals</div>
                                    <div style={{ width: '10%', textAlign: 'left' }}></div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>$20,000</div>
                                    <div style={{ width: '10%', textAlign: 'right' }}>1.0%</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>0%</div>
                                    <div style={{ width: '15%', textAlign: 'right' }}>0%</div>
                                    <div style={{ width: '15%', textAlign: 'center' }}>$0</div>
                                </TableBody>                                  
                              </Card.Body>
                        </Card>
                    </AssetsList>
                </AssetsBody>
            </AssetsContainer>
        </>
    );
}