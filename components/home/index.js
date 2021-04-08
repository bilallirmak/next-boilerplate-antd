import React from 'react';
import {useRouter} from "next/router";
import {i18} from '../../i18n'
import {Button, Col, Row} from "antd";
import TextTitle from "../core/text/title";
import StoreProvider from "../../utils/store-provider";

const UserStore = StoreProvider.getStore('UserStore')

const Home = () => {
  const router = useRouter()

  const changeLang = async (locale) => {
    await i18.changeLanguage(locale)
  }

  return (

      <Row justify={"center"} align={"middle"}>
        <Col >
          <TextTitle>
            Welcome To ONCOTRUST PEDIGIRI
          </TextTitle>
        </Col>
      </Row>

  );
};

export default Home
