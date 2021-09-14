import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { contracts } from '../../../utils/blockchain/contract.testnet';
import { getWeb3Contract } from '../../../utils/blockchain/contract-helpers';
import { MainTitleContainer, MainTitle, SubTitle, Divider, PageContainer, PageBody, PageList } from '../../components/Container';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css'; 

const InsuranceTitleContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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
        backgroundColor: '#121318',

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        style: {
            fontSize:'15px',
            fontFamily: 'Times New Roman',
            color: '#A0A0A0',
            fill: '#fff',
        }
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    fontSize: '15px',
                    color: '#fff',
                }
            },
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Treasury',
            y: 10
        }, {
            name: 'Yearn USDC',
            y: 40
        }, {
            name: 'Anchor',
            y: 30
        }, {
            name: 'Leveraged Alchemix',
            y: 20
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    fontSize: '15px',
                    color: '#fff',
                }

            }
        }
    },
    credits: {
        enabled: false
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
    // const [strategies, setStrategy] = useState([]);
    const getStrategies = async () => {
        const strategy = await bankerContract.methods.getAllStrategies().call();
        console.log(strategy);
    }
    useEffect(()=> {
        getStrategies();
    })
    return(
        <>
            <Header/>
            <PageContainer>
                <PageBody>
                    <PageList>
                        <Card className="main-card">
                            <Card className="sub-card">
                                <Card.Header >
                                    <MainTitleContainer >
                                        <MainTitle>Assets</MainTitle>
                                        <MainTitle>$20,000,000</MainTitle>
                                    </MainTitleContainer>
                                    <MainTitleContainer >
                                        <SubTitle>Multi-chain yield generating strategies</SubTitle>
                                    </MainTitleContainer>
                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={configAssets} containerProps={{ style: { width: '100%' } }} />
                                  <MainTitleContainer>
                                        <SubTitle>Treasury</SubTitle>
                                        <SubTitle>$1,000,000</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Yearn USDC</SubTitle>
                                        <SubTitle>$4,000,000</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Anchor</SubTitle>
                                        <SubTitle>$3,000,000</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Leveraged Alchemix</SubTitle>
                                        <SubTitle>$2,000,000</SubTitle>
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
                    </PageList>
                    <PageList>
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
                                        <SubTitle>Insured deposits</SubTitle>
                                        <SubTitle>$16,000,000</SubTitle>
                                        <SubTitle>0%</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Insurance total</SubTitle>
                                        <SubTitle>$4,000,000</SubTitle>
                                        <SubTitle>25%</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Insured used</SubTitle>
                                        <SubTitle>$2,700,00</SubTitle>
                                        <SubTitle>67.5%</SubTitle>
                                  </MainTitleContainer>
                                  <MainTitleContainer>
                                        <SubTitle>Insured deposits</SubTitle>
                                        <SubTitle>$0</SubTitle>
                                        <SubTitle>12.5%</SubTitle>
                                  </MainTitleContainer>
                                </Card.Body>
                            </Card>                            
                        </Card>
                    </PageList>                    
                </PageBody>
            </PageContainer>
        </>
    );
}