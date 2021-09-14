import React from 'react';
import { Header } from '../../components/Header';
import { MainTitleContainer, MainTitle, SubTitle, PageContainer, PageBody, PageList } from '../../components/Container';import { Card } from 'react-bootstrap';
import './index.css';

export function Settings() {
    return(
        <>
            <Header/>
            <PageContainer>
                <PageBody>
                    <PageList>
                        <Card className="main-card">
                            <Card className="tab-card">
                                <Card.Header>
                                    <MainTitle>Intrest rate</MainTitle> 
                                </Card.Header>
                                <Card.Body>
                                    <MainTitleContainer>
                                        <SubTitle>MaxUSD interest rate</SubTitle> 
                                        <SubTitle>4.10%</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Next interest rate</SubTitle> 
                                        <SubTitle>4.05%</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Next rate start time</SubTitle> 
                                        <SubTitle>0:01 1-9-2021</SubTitle> 
                                    </MainTitleContainer>                                    
                                </Card.Body>
                            </Card>
                            <Card className="tab-card">
                                <Card.Header>
                                    <MainTitle>Minting</MainTitle> 
                                </Card.Header>
                                <Card.Body>
                                    <MainTitleContainer>
                                        <SubTitle>Deposit%</SubTitle> 
                                        <SubTitle>100%</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>$ Maxbanker price</SubTitle> 
                                        <SubTitle>$5</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Ceiling MaxUSD price</SubTitle> 
                                        <SubTitle>1.010</SubTitle> 
                                    </MainTitleContainer>                                    
                                </Card.Body>                                
                            </Card>
                            <Card className="tab-card">
                                <Card.Header>
                                    <MainTitle>Staking rewards</MainTitle> 
                                </Card.Header>
                                <Card.Body>
                                    <MainTitleContainer>
                                        <SubTitle>Maxbanker per stake</SubTitle> 
                                        <SubTitle>0.05</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Staking available</SubTitle> 
                                        <SubTitle>$500,000</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Stake strike price</SubTitle> 
                                        <SubTitle>0.2000</SubTitle> 
                                    </MainTitleContainer>
                                    <MainTitleContainer>
                                        <SubTitle>Stake lockup time</SubTitle> 
                                        <SubTitle>1 year</SubTitle> 
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