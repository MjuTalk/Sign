import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VocHeader from '../../components/voc/VocHeader';
import { Link } from 'react-router-dom';

import CommonTable from '../../components/Table/CommonTable';
import CommonTableColumn from '../../components/Table/CommonTableColumn';
import CommonTableRow from '../../components/Table/CommonTableRow';

function Voc() {
  const [data, setData] = useState({});
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/toyseven/voc').then((response) => {
          setData(response.data);
      })
  }, []);

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일']}>
        {
          data ? data.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/Voc/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default Voc;