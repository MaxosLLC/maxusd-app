import React from 'react';
import { Header } from '../../components/Header';
import { contracts } from '../../../utils/blockchain/contract.testnet';
import { getWeb3Contract } from '../../../utils/blockchain/contract-helpers';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css'; 
const BoardContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #121318;
`;
const BoardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 40px 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 20px;
  }
`
const BoardList = styled.div`
  flex: 1;
  border-width: 1px 0 0;
  margin-top: 1rem;
`;
const MainTitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const InsuranceTitleContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;
const Divider = styled.div`
  width: 50%;
  height: 2px;
  background-color: #fff;
`;
const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: white;
`;
const InsuranceTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: white;
`;

var configAssets = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#121318'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
};
var configMaxUSD = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#121318'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Floating MaxUSD',
            y: 80.0,
            selected: true
        }, {
            name: 'Insurance reserve',
            y: 12.5
        }, {
            name: 'Staked MaxUSD',
            y: 7.5
        }]
    }]
};
var configInsurance = {
    chart: {
        type: 'bar',
        backgroundColor: '#121318'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Insured deposits', 'Insurance total', 'Insurance used', 'Leverage ratio'],
        title: {
            text: null
        },
        labels: {
            enabled: true,
            style: {
              color: 'rgba(235, 235, 245, 0.3)',
              fontSize: '16px'
            }
        },
    },
    yAxis: {
        min: 0,
        labels: {
            enabled: true,
            style: {
              color: 'rgba(235, 235, 245, 0.3)',
              fontSize: '16px'
            }
          },
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        showInLegend: false,
        data: [2000000, 150000, 20000, 10000]
    }]
}
export function Dashboard() {
    var bankerContract = getWeb3Contract(contracts.banker.address, contracts.banker.abi);
    console.log('bankerContract :', bankerContract.methods);
    return(
        <>
            <Header/>
            <BoardContainer>
                <BoardBody>
                    <BoardList>
                        <Card className="main-card">
                            <Card className="sub-card">
                                <Card.Header >
                                    <MainTitleContainer >
                                        <MainTitle>Assets</MainTitle>
                                        <MainTitle>$20,000,000</MainTitle>
                                    </MainTitleContainer>
                                    <MainTitleContainer >
                                        <SubTitle>Mult-chain yield generating strategies</SubTitle>
                                    </MainTitleContainer>
                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={configAssets} containerProps={{ style: { width: '100%' } }} />
                                  <MainTitleContainer>
                                        <SubTitle>Assets</SubTitle>
                                        <SubTitle>$20,000,000</SubTitle>
                                  </MainTitleContainer>
                                </Card.Body>
                            </Card>
                            <Card className="sub-card">
                                <Card.Header >
                                    <MainTitleContainer >
                                        <MainTitle>Liabilities</MainTitle>
                                        <MainTitle>$20,000,000</MainTitle>
                                    </MainTitleContainer>
                                    <MainTitleContainer >
                                        <SubTitle>Total issued MaxUSD</SubTitle>
                                    </MainTitleContainer>
                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={configMaxUSD} containerProps={{ style: { width: '100%' } }} />
                                  <MainTitleContainer>
                                        <SubTitle>Floating MaxUSD</SubTitle>
                                        <SubTitle>$16,000,000</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Insurance</SubTitle>
                                  </MainTitleContainer>
                                  <Divider />
                                  <InsuranceTitleContainer>
                                        <InsuranceTitle>Staked MaxUSD</InsuranceTitle>
                                        <InsuranceTitle>$1,500,000</InsuranceTitle>
                                  </InsuranceTitleContainer>
                                  <InsuranceTitleContainer>
                                        <InsuranceTitle>Insurance reserve</InsuranceTitle>
                                        <InsuranceTitle>$2,500,000</InsuranceTitle>
                                  </InsuranceTitleContainer>
                                </Card.Body>
                            </Card>                            
                        </Card>
                    </BoardList>
                    <BoardList>
                        <Card className="main-card">
                            <Card className="sub-card">
                                <Card.Header >
                                    <MainTitleContainer >
                                        <MainTitle>Assets</MainTitle>
                                        <MainTitle>$20,000,000</MainTitle>
                                    </MainTitleContainer>
                                    <MainTitleContainer >
                                        <SubTitle>Mult-chain yield generating strategies</SubTitle>
                                    </MainTitleContainer>

                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={configAssets} containerProps={{ style: { width: '100%' } }} />
                                  <MainTitleContainer>
                                        <SubTitle>Assets</SubTitle>
                                        <SubTitle>$20,000,000</SubTitle>

                                  </MainTitleContainer>
                                </Card.Body>
                            </Card>
                            <Card className="sub-card">
                                <Card.Header >
                                    <MainTitleContainer >
                                        <MainTitle>Liabilities</MainTitle>
                                        <MainTitle>$20,000,000</MainTitle>
                                    </MainTitleContainer>
                                    <MainTitleContainer >
                                        <SubTitle>Total issued MaxUSD</SubTitle>
                                    </MainTitleContainer>

                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={configInsurance} containerProps={{ style: { width: '100%' } }} />
                                  <MainTitleContainer>
                                        <SubTitle>Liabilities</SubTitle>
                                        <SubTitle>$20,000,000</SubTitle>
                                  </MainTitleContainer>
                                </Card.Body>
                            </Card>                            
                        </Card>
                    </BoardList>                    
                </BoardBody>
            </BoardContainer>
        </>
    );
}