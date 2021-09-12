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
`;
var config = {
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
            sliced: true,
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
                                <Card.Header>
                                    <Card.Title>
                                        Assets
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <HighchartsReact highcharts={Highcharts} options={config} containerProps={{ style: { width: '100%' } }} />
                                </Card.Body>
                            </Card>
                        </Card>
                    </BoardList>
                </BoardBody>
            </BoardContainer>
        </>
    );
}