import React from 'react';
import { Header } from '../../components/Header';
import { Card } from 'react-bootstrap';
import { TableHeader, TableBody } from '../../components/Table';
import { PageContainer, PageBody, PageList } from '../../components/Container';
export function Assets() {
    return(
        <>
            <Header/>
            <PageContainer>
                <PageBody>
                    <PageList>
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
                    </PageList>
                </PageBody>
            </PageContainer>
        </>
    );
}