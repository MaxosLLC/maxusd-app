import styled from 'styled-components';
export const TableContainer = styled.div`
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